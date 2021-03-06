const webpack = require('webpack')
const path = require('path')

module.exports = {
    entry: [
        './index.js'
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.js',
    },
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: 'file-loader?name=[name].[ext]',
            },
            {
              test:/\.(s*)css$/,
              use:['style-loader','css-loader']
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ["@babel/preset-env", "@babel/react"]
                }
            },
        ],
    },
    devServer: {
        host: '0.0.0.0',
        port: 3000
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
    ]
}