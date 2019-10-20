const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    // entry:["@babel/polyfill","./src/index.js"],
    // entry:"./src/index.js",
    entry:{
        app:"./src/index.js",
        hello:"./src/hello.js"
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:"[name].[hash]-bundle.js"
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
      },
    devtool:false,
    mode:"development",
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin(
            { // 打包输出HTML
                title: 'Hello World app',
                filename: 'index.html',
                template: 'public/index.html',
                hash:true,
                chunks:['app']
            }
        ),
        new HtmlWebpackPlugin(
            { // 打包输出HTML
                title: 'Hello World app11111',
                filename: 'test.html',
                template: 'public/index.html',
                hash:true,
                chunks:["hello"]
            }
        ),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: devMode ? '[name].css' : '[name].[hash].css',
            chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    // options: {
                    //     plugins: ['@babel/plugin-transform-arrow-functions']
                    // }
                    // options: {
                    //     presets: ['@babel/preset-env'],
                    //     plugins:[["@babel/plugin-proposal-decorators", { "legacy": true }]]
                    // }
                }
            },
            {
                test: /\.css$/i,
                use: [devMode ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.less$/,
                use: [devMode ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader','less-loader'], // compiles Less to CSS
              }
        ]
    }
}