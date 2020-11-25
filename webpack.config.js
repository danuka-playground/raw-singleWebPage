module.exports = {
    entry:'./index.js',
    module:{
        rules:[
            {
                test:/[.]scss$/,
                use:['style-loader','css-loader','sass-loader']
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
    }
}