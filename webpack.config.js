const config = require('./config');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: config.entry,
    output: config.output,
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                },
            }
        ]
    },
    devServer: {
        contentBase: `${__dirname}/dist`,
        port: 9000,
        hot: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        alias: config.aliases
    },
};
