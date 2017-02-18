const webpack = require('webpack');
const path = require('path');

let entry = ["./client/app.js"];

module.exports = {
    entry : entry,
    devServer : {
        inline : true
    },
    module : {
        loaders : [
            {
                test : /\.js$/,
                loaders : ['babel'],
                exclude : /node_modules/
            },
            {
                test : /\.scss$/,
                loader : 'style-loader!css-loader!sass-loader'
            },
            {
                test : /\.css$/,
                loader : 'style-loader!css-loader'
            },
            {
                test : /\.html$/,
                loader : 'html',
                query : {
                    minimize : true
                }
            }
        ]
    },
    plugins : [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    output : {
        path : path.join(__dirname, 'dist/'),
        publicPath : 'dist/',
        filename : 'bundle.js'
    }
};