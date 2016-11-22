const webpack = require('webpack')

module.exports = {
	entry: './src/index.js',
	output: {
		path: './dist',
		filename: 'lettrcd.js',
		'library': 'lettrcd',
		'libraryTarget': 'umd'
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader'
		}]
	}
}