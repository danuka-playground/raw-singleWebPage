const MiniCssExtractPlugin = require('mini-css-extract-plugin');




module.exports = {
    entry:'./src/index.js',
    
    output:{
        path:__dirname + '/dist',
        filename: 'main.bundle.js',
        publicPath:'',
        assetModuleFilename:'asset/[hash][ext][query]'
    },
    module:{
        rules:[
            {
                test:/[.]scss$/,
                use:[MiniCssExtractPlugin.loader,'css-loader','sass-loader']
            },
            {
                test: /\.(png|jpeg|jpg|gif|svg)$/,
                type: 'asset/resource'
            },
            {

                test: /\.(woff|woff2|eot|ttf|otf)$/i,
        
                type: 'asset/resource',
        
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'main.min.css',
        })
    ],
     devServer: {
        publicPath: '/dist/',
        watchContentBase:true
    },
    mode:'development'   
}