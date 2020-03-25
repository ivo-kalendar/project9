
const path = require('path')
const webpack = require('webpack')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
  	mode: "production",
	entry: './src/frontend/main.js',
	output: {
		filename: '[name]-bundle.js',
		path: path.resolve(__dirname, '../../dist'),
		publicPath: "/"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: "babel-loader",
				exclude: /node_modules/
			},
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				loader: "babel-loader" 
			},
			{
				test: /\.(sass|scss|css)$/,
				use: [ MiniCSSExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader' ]
			},
			{
				test: /\.html$/,
				loader: 'html-loader'
			},
			{
				test: /\.ejs$/,
				loader: 'ejs-loader',
				exclude: /node-modules/
			}
		]
	},
	plugins: [ 
		new OptimizeCssAssetsPlugin(),
		new MiniCSSExtractPlugin({filename: "[name]-bundle.css"}), 
		new webpack.DefinePlugin({"process.env": {NODE_ENV: JSON.stringify("production")}}),
		new webpack.NamedModulesPlugin()
	]
}