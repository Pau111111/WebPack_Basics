const webpack = require("webpack");
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //Path of the file to convert
    entry: './src/components/main.js',

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
                test: /\.js$/, //Regular expression
                exclude: /(node_modules)/,//excluded node_modules
                use: {
                loader: "babel-loader",
                    options: {
                    presets: ["@babel/preset-env"]  //Preset used for env setup
                    }
                }
            },
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
            },
            // {
            //     test: /\.(png|jp(e*)g|svg)$/,
            //     use: [{
            //         loader: 'url-loader', //file-loader
            //         options: {
            //             limit: 8000, // Convert images < 8kb to base64 strings
            //             name: '../img/[hash]-[name].[ext]',
            //             esModule: false
            //         }
            //     }]
            // },
            
            {
                test: /\.(png)$/,  
                use: [{
                    loader: 'url-loader',
                    options: { 
                        limit: 8000, // Convert images < 8kb to base64 strings
                        name: 'images/[hash]-[name].[ext]', 
                        esModule: false,
                    } 
                }]
            }, 
            {
                test: /\.(jpg)$/,  
                use: [{
                    loader: 'url-loader',
                    options: { 
                        limit: 20000, // Convert images < 8kb to base64 strings
                        name: 'images/[hash]-[name].[ext]', 
                        esModule: false,
                    } 
                }]
            }, 
            {
                test: /\.(svg)$/,  
                use: [{
                    loader: 'url-loader',
                    options: { 
                        limit: 12000, // Convert images < 12kb to base64 strings
                        name: 'images/[hash]-[name].[ext]', 
                        esModule: false,
                    } 
                }]
            },
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