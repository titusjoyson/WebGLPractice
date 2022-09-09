const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: "node_modules/three/examples/js/libs/ammo.wasm.js", to: "dist/ammo.wasm.js" },
                { from: "node_modules/three/examples/js/libs/ammo.wasm.wasm", to: "dist/ammo.wasm.wasm" },
            ],
        }),
    ],
};