const BabiliPlugin = require('babili-webpack-plugin');

module.exports = (env = {}) => ({
	entry: './lib/index.js',
	output: {
		path: __dirname,
		filename: env.production ? 'index.min.js' : 'index.js',
	},
	devtool: env.production ? 'source-map' : 'cheap-module-eval-source-map',
	module: {
		loaders: [{
			test: /\.jsx?$/,
			loader: 'babel-loader',
			exclude: /node_modules/,
		}],
	},
	plugins: [
		...(env.production ? [new BabiliPlugin()] : []),
	],
});
