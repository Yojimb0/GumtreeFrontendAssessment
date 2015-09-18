var path = require('path');
var webpack = require('webpack');
var Uglify = webpack.optimize.UglifyJsPlugin;

module.exports = {
	entry: {
		javascript: "./app/app.js",
		html: "./index.html"
	},

	plugins: [
		new Uglify({
			test    : /\.(js|json)($|\?)/,
			minimize: true,
			compress: { 'negate_iife': false }
		})
	],

	output: {
		filename: "app.js",
		path: path.resolve(__dirname, "dist"),
		publicPath: "/assets/"
	},
	module: {
		loaders: [
			{ test: /\.js$/, exclude: /node_modules/, loaders: ["babel-loader"] },
			{ test: /\.json$/, loaders: ["json-loader"] },
			{ test: /\.html$/, loader: "file?name=[name].[ext]" },
			{ test: /\.scss$/, loader: "style!css!sass" },
			{ test: /\.(png|jpg|svg)$/, loader: 'file-loader' }
		],
	},
};