import { WASI, File, OpenFile, ConsoleStdout } from './wasi/index.js'

function output() {
  const decoder = new TextDecoder()
  let text = ''
  return {
    fd: new ConsoleStdout(bytes => {
      const remaining = 16000 - text.length
      if (remaining > 0) text += decoder.decode(bytes.subarray(0, remaining), { stream: true })
    }),
    read: () => (text + decoder.decode()).slice(0, 16000),
  }
}

self.onmessage = async ({ data: { program, stdin } }) => {
  const stdout = output()
  const stderr = output()
  // Only standard streams are available. There is no directory, host file or network capability.
  const input = new OpenFile(new File(new TextEncoder().encode(stdin), { readonly: true }))
  const wasi = new WASI(['program'], [], [input, stdout.fd, stderr.fd])
  try {
    const instance = await WebAssembly.instantiate(program, { wasi_snapshot_preview1: wasi.wasiImport })
    const exitCode = wasi.start(instance)
    self.postMessage({ status: exitCode === 0 ? 'ok' : 'error', exitCode, stdout: stdout.read(), stderr: stderr.read() })
  } catch (error) {
    self.postMessage({ status: 'error', exitCode: null, stdout: stdout.read(), stderr: stderr.read() + error.message })
  }
}
