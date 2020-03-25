
const path = require('path')
const webpack = require('webpack')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  	mode: "development",
	entry: {
		main: ['webpack-hot-middleware/client?reload=true', './src/frontend/main.js']
	},
	output: {
		filename: '[name]-bundle.js',
		path: path.resolve(__dirname, '../../dist'),
		publicPath: "/"
	},
	devServer: {
		contentBase: './src/views',
		overlay: true,
		hot: true
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader" 
			},
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				loader: "babel-loader" 
			},
			{
				test: /\.(sass|scss|css)$/,
				use: [ 'style-loader', 'css-loader', 'postcss-loader', 'sass-loader' ]
			},
			{
				test: /\.html$/,
				use: [{loader: 'html-loader'}]
			},
			{
				test: /\.ejs$/,
				loader: 'ejs-loader',
				exclude: /node-modules/
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin(),
		new HTMLWebpackPlugin({
			template: "./src/views/test.html"
		})
	]
}