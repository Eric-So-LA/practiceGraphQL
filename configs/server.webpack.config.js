var path = require('path');
var webpack = require('webpack');

module.exports = {
	devtools: 'eval',
	entry: [
		'webpack-dev-server/client?http://localhost:3000',
		'webpack/hot/only-dev-server',
		path.join(process.cwd(), 'client', 'src')
		],
		output: {
			path: path.join(process.cwd(), 'dist'),
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
				include: path.join(process.cwd(), 'client', 'src')
			}]
		},
		devServer: {
			hot: true,
			contentBase: './client'
		}
};