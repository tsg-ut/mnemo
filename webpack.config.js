module.exports = (env) => ({
	entry: './lib/index.js',
	output: {
		path: __dirname,
		filename: 'index.js',
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			loader: 'babel-loader',
			exclude: /node_modules/,
		}],
	},
});
