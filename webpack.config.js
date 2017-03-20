const path = require('path');

module.exports = {
	entry: './src/client/index.js',
	output: {
		path: __dirname + '/public',
		publicPath: '/assets/',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/, //include .js files
        exclude: /node_modules/, //exclude any and all files in the node_modules folder
        loader: 'babel-loader',
        query: {
					presets: ['es2015', 'react', 'env']
				}
			}
		]
	},
	devServer: {
		port: 3000,
		inline: true
	}
};
