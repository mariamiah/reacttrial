const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: "index_bundle.js"
    },
    module: {
        rules:[{
            test: /\.js$/,
            exclude:/node_modules/,
            use:{
                loader:"babel-loader"
            }
        },
    {
        test:/\.css$/,
        loaders: ["style-loader", "css-loader"]
    
    },
{
    test: /\.scss$/,
    loaders:["style-loader","css-loader","sass-loader"],

}]
},
devServer: {
    contentBase: path.join(__dirname, '../'),
    historyApiFallback: true,
  },

    plugins:[
        new HtmlPlugin({template: "./src/index.html"})
    ]
}
