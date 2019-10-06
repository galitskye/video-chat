const config = require('./config');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: config.entry,
    output: config.output,
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                },
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            disable: true
                        },
                    },
                ],
            }
        ]
    },
    devServer: {
        contentBase: config.distDirectory,
        port: 9000,
        hot: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    devtool: 'source-map',
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        alias: config.aliases
    },
};
