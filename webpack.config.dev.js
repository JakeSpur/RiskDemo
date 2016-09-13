const webpack = require('webpack');
const path = require('path');

module.exports = {
    debug: true,
    devtool: '#source-map',
    noInfo: false,
    entry: [
        'webpack/hot/dev-server',
        'webpack-hot-middleware/client?reload=true',
        './src/index'
    ],
    target: 'web',
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './src'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.join(__dirname, 'src'),
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /(\.css)$/,
                loaders: ['style', 'css']
            },
            {
                test: /\.svg$/,
                loader: "url?limit=10000&mimetype=image/svg+xml"
            },
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file'
            },
            {
                test: /\.(woff|woff2)$/,
                loader: 'url?prefix=font/&limit=5000'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/octet-stream'
            }
        ]
    },
    resolve: {
        modulesDirectories: ['node_modules']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};