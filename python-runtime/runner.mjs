import { loadPyodide } from './pyodide.mjs'

const python = await loadPyodide()
self.postMessage({ ready: true })
self.onmessage = ({ data: { code, modules, stdin } }) => {
  const lines = stdin ? stdin.split(/\r?\n/) : []
  if (stdin.endsWith('\n')) lines.pop()
  let line = 0
  let stdout = ''
  let stderr = ''
  const limit = 16000
  python.setStdin({ stdin: () => lines[line++] ?? null })
  python.setStdout({ batched: text => { stdout = (stdout + text + '\n').slice(0, limit) } })
  python.setStderr({ batched: text => { stderr = (stderr + text + '\n').slice(0, limit) } })
  for (const [name, contents] of Object.entries(modules ?? {})) python.FS.writeFile(name, contents)
  try {
    python.runPython('import sys; sys.path.insert(0, ".")')
    python.runPython(code, { filename: 'example.py' })
    self.postMessage({ status: 'ok', stdout, stderr, exitCode: 0 })
  } catch (error) {
    stderr = (stderr + error.message).slice(0, limit)
    self.postMessage({ status: 'error', stdout, stderr, exitCode: 1 })
  }
}
