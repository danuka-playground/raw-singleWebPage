const merge  = require('webpack-merge');
const superconfig = require('./webpack.config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = merge(superconfig,{
     devServer: {
        port:3000
    },
    devtool:false,
    mode:'development',
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'main.css',
        })
    ]  
})