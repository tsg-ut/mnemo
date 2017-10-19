const path = require('path');
const {SourceMapDevToolPlugin} = require('webpack');

module.exports = (config) => {
	config.set({
		basePath: '',
		frameworks: ['mocha'],
		files: [
			'test/unit/*.@(ls|js|jsx)',
		],
		exclude: [],
		preprocessors: {
			'**/*.@(js|jsx|ls)': ['webpack', 'sourcemap'],
		},
		webpack: {
			devtool: 'inline-source-map',
			module: {
				loaders: [{
					test: /\.jsx?$/,
					loader: 'babel-loader',
					exclude: /node_modules/,
				}, {
					test: /\.js$/,
					include: [
						path.resolve(__dirname, 'node_modules/react-hammerjs'),
					],
					loader: 'babel-loader',
					options: {
						plugins: [
							'transform-class-properties',
						],
						babelrc: false,
					},
				}, {
					test: /\.ls$/,
					loader: 'livescript-loader',
				}],
			},
			resolve: {
				mainFields: ['browser', 'main'],
			},
			externals: [
				'react-addons-test-utils',
				'react/lib/ReactContext',
				'react/lib/ExecutionEnvironment',
			],
			plugins: [
				// https://github.com/webpack-contrib/karma-webpack/issues/109#issuecomment-224961264
				new SourceMapDevToolPlugin({
					filename: null,
					test: /\.(ls|js|jsx)($|\?)/i,
				}),
			],
		},
		reporters: ['spec', 'coverage'],
		coverageReporter: {
			dir: 'coverage',
			reporters: [
				{type: 'lcov', subdir: 'lcov'},
			],
		},
		port: 9876,
		colors: true,
		logLevel: config.LOG_INFO,
		autoWatch: false,
		browsers: ['Electron'],
		singleRun: true,
		concurrency: Infinity,
		client: {
			useIframe: false,
		},
	});
};
