// AsyncInterpreter — runs interpret() OFF the main thread (INTERPRET §5c).
//
// Transport + WATCHDOG only; it knows nothing about Scene shape. It owns a
// worker, posts (source, assignment) tagged with a sequence number, and:
//   - delivers the worker's reply for the LATEST request (older replies are
//     stale and dropped — a fast typist supersedes in-flight runs);
//   - if the worker does not reply within timeoutMs, TERMINATES it (clean, since
//     it is a separate thread), spawns a fresh one, and delivers a timeout error.
// The caller keeps drawing the last good Scene meanwhile, so the UI never locks.
//
// `spawn` is injected (() => workerLike) so the control logic is testable in Node
// with a fake worker; in the browser it spawns the real interpret.worker.js.
export class AsyncInterpreter {
  constructor({ spawn, onResult, timeoutMs = 1500 }) {
    this._spawn = spawn;
    this._onResult = onResult; // (data) => void, data = {seq, scene?} | {seq, error}
    this._timeoutMs = timeoutMs;
    this._seq = 0;
    this._pending = null; // { seq, timer }
    this._ensureWorker();
  }

  _ensureWorker() {
    this._worker = this._spawn();
    this._worker.onmessage = (e) => this._receive(e.data);
  }

  // Schedule a run; returns its sequence number. Supersedes any in-flight run.
  request(source, assignment) {
    const seq = ++this._seq;
    if (this._pending) clearTimeout(this._pending.timer);
    this._pending = { seq, timer: setTimeout(() => this._onTimeout(seq), this._timeoutMs) };
    this._worker.postMessage({ seq, source, assignment });
    return seq;
  }

  _receive(data) {
    if (!this._pending || data.seq !== this._pending.seq) return; // stale / superseded
    clearTimeout(this._pending.timer);
    this._pending = null;
    this._onResult(data);
  }

  _onTimeout(seq) {
    if (!this._pending || this._pending.seq !== seq) return;
    this._pending = null;
    try {
      this._worker.terminate();
    } catch {
      /* fake/already-dead worker */
    }
    this._ensureWorker(); // a runaway run can't be resumed; start fresh
    this._onResult({ seq, error: { message: 'execution timed out' } });
  }

  dispose() {
    if (this._pending) clearTimeout(this._pending.timer);
    try {
      this._worker.terminate();
    } catch {
      /* ignore */
    }
  }
}
