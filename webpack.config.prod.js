
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const merge  = require('webpack-merge');
const superconfig = require('./webpack.config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');



module.exports = merge(superconfig,{
    output:{
        filename:'main.[contenthash].bundle.js'
    },
    plugins: [
        new CleanWebpackPlugin(), 
        new MiniCssExtractPlugin({
            filename: 'main.[contenthash].min.css',
        })
    ],
    mode:'production'  
})