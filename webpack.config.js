const path = require('path');
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    //Path of the file to convert
    mode: "development",
    entry: './src/components/main.js',

    //Path to the converted file
    // output: {
    //     // path: __dirname + '/dist/assets/js',
    //     // filename: 'app.js'
    //     path: __dirname + '/dist/assets/js',
    //     filename: 'app.js'
    // },
    //Por for the webpack-dev-server (autocompile code)
    devServer: {
        port: 5555
    },
    //This will contain the files that are not JS that you want to autoimport and compile into your project
    module: {
        rules: [{
                test: /\.js$/, //Regular expression
                exclude: /(node_modules)/, //excluded node_modules
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"] //Preset used for env setup
                    }
                }
            },
            {
                test: /\.html$/,
                use: [{
                    loader: "html-loader",
                    options: {
                        minimize: true
                    }
                }]
            },
            {
                test: /\.css$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader'
                    },
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
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
                        name: 'assets/img/[hash]-[name].[ext]',
                        //encoding: 'base64',
                        esModule: false,
                    }
                }]
            },
            {
                test: /\.(jpg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 12000, // Convert images < 8kb to base64 strings
                        name: 'assets/img/[hash]-[name].[ext]',
                        //encoding: 'base64',
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
                        name: 'assets/img/[hash]-[name].[ext]',
                        //encoding: 'base64',
                        esModule: false,
                    }
                }]
            },
        ]
    },
    plugins: [
        //Plugin that autoimport dependencies into HTML
        // new webpack.ProvidePlugin({
        //     $: 'jquery',
        //     jQuery: 'jquery'
        // }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: __dirname + "/dist/index.html"
            //filename: '../../index.html'
        }),
        // Plugin that autoimport and compile CSS
        new MiniCssExtractPlugin({
            publicPath: (resourcePath, context) => {
                // publicPath is the relative path of the resource to the context
                // e.g. for ./css/admin/main.css the publicPath will be ../../
                // while for ./css/main.css the publicPath will be ../
                return path.relative(path.dirname(resourcePath), context) + '/';
            },
            filename: "assets/css/[name].css",
            chunkFilename: "[id].css"
        })
    ]
}