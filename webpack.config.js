var webpack = require('webpack');
module.exports = {
	entry: "./src/main.jsx",
	output: {
		path: __dirname + '/dist/build/',
		publicPath: "build/",
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: "babel-loader"
			},
			{
				test: /\.jsx$/,
				loaders: ["react-hot-loader", "babel-loader"]
			},
			{
				test: /\.css$/,
				loader: "style-loader!css-loader!autoprefixer-loader"
			},
			{
				test: /\.sass$/,
				loaders: ["style-loader", "css-loader?sourceMap", "sass-loader?sourceMap"]
			},
			{
				test: /\.json$/,
				loader: "json-loader"
			}
		]
	},
}