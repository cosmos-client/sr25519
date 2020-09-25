const sr25519_bg = require("./pkg/sr25519_bg.js");

let imports = {};
let wasm;

const bytes = Buffer.from(sr25519_bg.base64, "base64");

const wasmModule = new WebAssembly.Module(bytes);
const wasmInstance = new WebAssembly.Instance(wasmModule, imports);
wasm = wasmInstance.exports;
module.exports.__wasm = wasm;
