var path = require('path');
var webpack = require('webpack');

module.exports = {
	devtools: 'eval',
	entry: [
		'webpack-dev-server/client?http://localhost:3000',
		'webpack/hot/only-dev-server',
		path.join(__dirname, 'client', 'src')
		],
		output: {
			path: path.join(__dirname, 'dist'),
			filename: 'bundle.js',
			publicPath: '/static/'
		},
		plugins: [
		new webpack.HotModuleReplacementPlugin()
		],
		module: {
			loaders: [{
				test: /\.js$/,
				loaders: ['react-hot', 'babel'],
				include: path.join(__dirname, 'client', 'src')
			}]
		},
		devServer: {
			hot: true,
			contentBase: './client'
		}
};