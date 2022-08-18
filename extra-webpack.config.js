'use strict';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const zlib = require("zlib");
 const CompressionPlugin = require(`compression-webpack-plugin`);
var path = require('path');
module.exports = {

    mode: "production",

    optimization: {
        nodeEnv: 'production',
        minimize: true,
    },
    plugins: [
        new CompressionPlugin({
            filename: "[path][base].gz",
            algorithm: "gzip",
            test: /\.js$|\.css$|\.ttf$|\.woff$|\.woff2$|\.svg$|\.png$/,
            threshold: 10240,
            minRatio: 0.8,
          }),
          new CompressionPlugin({
            filename: "[path][base].br",
            algorithm: "brotliCompress",
            test: /\.(js|css|svg|ttf|woff|woff2|png)$/,
            compressionOptions: {
              params: {
                [zlib.constants.BROTLI_PARAM_QUALITY]: zlib.constants.BROTLI_MAX_QUALITY,
              },
            },
            threshold: 10240,
            minRatio: 0.8,
          }),
       
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html"
        }),
           
    ],
  

};


