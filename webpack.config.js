module.exports = {
	entry: {
		javascript: "./app/app.js",
		html: "./index.html"
	},

	output: {
		filename: "app.js",
		path: __dirname + "/dist",
	},
	module: {
		loaders: [
			{ test: /\.js$/, exclude: /node_modules/, loaders: ["react-hot", "babel-loader"] },
			{ test: /\.json$/, loaders: ["json-loader"] },
			{ test: /\.html$/, loader: "file?name=[name].[ext]" },
			{ test: /\.scss$/, loader: "style!css!sass" },
			{ test: /\.(png|jpg|svg)$/, loader: 'file-loader' }
		],
	},
};