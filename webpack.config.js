module.exports = {
	entry: './app/main.jsx',
	output: {
		filename: './public/javascripts/bundled.js'
	},

	resolve: {
		extensions: ['', '.js', '.jsx']
	},

	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				
				loader: 'babel-loader',
				exclude: '/node_modules/',
				query: {
					presets: ['es2015', 'react']
				}
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loaders: ["babel-loader"]
			}
		]
	}
}