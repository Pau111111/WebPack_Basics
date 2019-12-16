const htmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
//const path = require('path');

module.exports = {
    //Path of the file to convert
    entry: './src/assets/js/main.js',

    //Path to the converted file
    output: {
        path: __dirname + '/dist/assets/js',
        filename: 'app.js'
    },
    //Por for the webpack-dev-server (autocompile code)
    devServer: {
        port: 5555
    },
    //This will contain the files that are not JS that you want to autoimport and compile into your project
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {loader: miniCssExtractPlugin.loader},
                    {loader: 'css-loader'},
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    miniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        //Plugin that autoimport dependencies into HTML
        new htmlWebpackPlugin({
            template: './src/index.html',
            filename: __dirname + "/dist/index.html"
        }),
        // Plugin that autoimport and compile CSS
        new miniCssExtractPlugin({
            publicPath: (resourcePath, context) => {
                // publicPath is the relative path of the resource to the context
                // e.g. for ./css/admin/main.css the publicPath will be ../../
                // while for ./css/main.css the publicPath will be ../
                return path.relative(path.dirname(resourcePath), context) + '/';
            },
            filename: "../css/[name].css",
            chunkFilename: "[id].css"
        })
    ]
}