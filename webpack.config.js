const MiniCssExtractPlugin = require('mini-css-extract-plugin');
var path = require('path');

module.exports = {
    mode: "development",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [new MiniCssExtractPlugin()],
    devServer: {
        contentBase: './dist',
        historyApiFallback: true,
    },
    devtool: 'source-map',
    resolve: {
        extensions: [".js", ".jsx"]
    }
}
