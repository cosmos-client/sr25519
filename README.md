# sr25519

This is a sr25519 code made with Rust.
This can be used from Node.JS by compiling to WASM.

## For library developers

```shell
cargo install wasm-pack
wasm-pack build --target nodejs .
node bundle
cd pkg
npm publish
```
