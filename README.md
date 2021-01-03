# sr25519

This is a sr25519 code made with Rust.
This can be used from Node.JS by compiling to WASM.

## For library developers

```shell
cargo install wasm-pack
wasm-pack build --target bundler
cd pkg
npm publish
```

## To use in web

`webpack.config.js`

```javascript
module.exports = {
  resolve: {
    extensions: [".wasm"],
  },
};
```
