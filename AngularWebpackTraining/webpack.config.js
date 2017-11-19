var webpack = require("webpack");
var path = require("path");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./config/helpers');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {

    entry: {
        'app': './src/main.ts',
        'polyfills': './src/polyfills.ts'
    },

    output: {
        filename: './Scripts/[name].bundle.js',
        path: __dirname
    },
    resolve: {
        extensions: ['.ts', '.js', '.json', '.css', '.scss', '.html', '.cshtml']
    },

    module: {
        rules: [
          {
              test: /\.ts$/,
              loaders: ['awesome-typescript-loader', 'angular-router-loader', 'angular2-template-loader']
          },
          {
              test: /\.html$/,
              loader: 'html-loader'
          },
          {
              test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
              loader: 'file-loader?name=assets/[name].[hash].[ext]'
          },
         {
             test: /\.(css|scss)$/,
             loaders: ['to-string-loader'].concat(ExtractTextPlugin.extract({
                 fallback: "style-loader",
                 use: ['css-loader?sourceMap', 'sass-loader?sourceMap']
             }))
         },
          {
              test: /\.scss$/,
              use: ExtractTextPlugin.extract({
                  fallback: 'style-loader',
                  use: ['css-loader', 'sass-loader']
              })
          }

        ]
    },

    plugins: [
        new ExtractTextPlugin('./Content/style.css'),
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false },
            comments: false,
            sourceMap: false,
            minimize: false
        }),
        new webpack.IgnorePlugin(/^\.\/locale$/, [/moment$/]),


        //new BundleAnalyzerPlugin()
    ]
};