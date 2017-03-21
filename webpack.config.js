const path = require('path');

module.exports = {
	entry: './src/client/index.js',
	output: {
		path: __dirname + '/public',
		publicPath: '/assets/',
		filename: 'bundle.js'
	},
	module: {
		preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'jshint-loader'

      }
   ],
		loaders: [
			{
				test: /\.jsx?$/,
        exclude: /node_modules/, //exclude any and all files in the node_modules folder
        loader: 'babel-loader',
        query: {
					presets: ['es2015', 'react', 'env']
				}
			},
			{
				test: /\.css$/,
				use: [ 'style-loader', 'css-loader' ] 
			}
		]
	},
	devServer: {
		port: 3000,
		inline: true
	}
};
