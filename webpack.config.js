const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['./src/index'],
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
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
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
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
        alias: {
            '#src': path.resolve(__dirname, 'src/'),
            '#theme': path.resolve(__dirname, 'src/theme/'),
            '#components': path.resolve(__dirname, 'src/components/'),
            'react-dom': '@hot-loader/react-dom',
            'mobx':  path.resolve(__dirname, '/node_modules/mobx/lib/mobx.es6.js')
        }
    },
};
