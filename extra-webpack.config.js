'use strict';
const HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
module.exports = {

    mode: "production",

    optimization: {
        nodeEnv: 'production',
        minimize: true,
    },
    plugins: [
  
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html"
        }),
           
    ],
  

};


