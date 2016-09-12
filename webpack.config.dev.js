import webpack from 'webpack';
import path from 'path';

export default {
    debug: true,
    devtool: 'source-map',
    noInfo: false,
    entry: [
        './src/index'
    ],
    target: 'web',
    output: {
        path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './src'
    },
    module: {
        loaders: [
            { test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel'] },
            { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader') },
            { test: /\.svg$/, loader: "url-loader?limit=10000&mimetype=image/svg+xml" }
        ]
    },
    postcss: [
        require('autoprefixer-core'),
        require('postcss-color-rebeccapurple')
    ],

    resolve: {
        modulesDirectories: ['node_modules']
    },

    plugins: [
        new ExtractTextPlugin('style.css', { allChunks: true })
    ]
};