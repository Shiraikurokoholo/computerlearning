// Publish the larger compiler assets precompressed so static hosting does not need custom headers.
const fetchAsset = self.fetch.bind(self)
const compressedAssets = new Set(['llvm.core.wasm', 'llvm-resources.tar'].map(name => new URL(name, import.meta.url).href))
self.fetch = async (resource, options) => {
  const url = String(resource)
  if (!compressedAssets.has(url)) return fetchAsset(resource, options)
  const response = await fetchAsset(url + '.gzip.bin', options)
  if (!response.ok || !response.body) throw new Error('C++ 编译器文件加载失败。')
  return new Response(response.body.pipeThrough(new DecompressionStream('gzip')), {
    headers: { 'Content-Type': url.endsWith('.wasm') ? 'application/wasm' : 'application/octet-stream' },
  })
}
const { runClang, Exit } = await import('./bundle.js')
await runClang()
self.postMessage({ ready: true })
self.onmessage = async ({ data: code }) => {
  const decoder = new TextDecoder()
  let diagnostics = ''
  try {
    const files = await runClang([
      'clang++', '-std=c++17', '-O0', '-fno-exceptions', '-Wl,--max-memory=67108864', 'main.cpp', '-o', 'program.wasm',
    ], { 'main.cpp': code }, {
      stderr: bytes => { if (bytes && diagnostics.length < 16000) diagnostics += decoder.decode(bytes, { stream: true }) },
    })
    const program = await WebAssembly.compile(files['program.wasm'])
    self.postMessage({ program, diagnostics: (diagnostics + decoder.decode()).slice(0, 16000) })
  } catch (error) {
    self.postMessage({
      diagnostics: (diagnostics + decoder.decode()).trim().slice(0, 16000) || error.message,
      exitCode: error instanceof Exit ? error.code : null,
    })
  }
}
