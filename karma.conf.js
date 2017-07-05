module.exports = (config) => {
	config.set({
		basePath: '',
		frameworks: ['mocha'],
		files: [
			'test/unit/*.@(ls|js|jsx)',
		],
		exclude: [],
		preprocessors: {
			'**/*.@(js|jsx|ls)': ['webpack'],
		},
		webpack: {
			module: {
				loaders: [{
					test: /\.jsx?$/,
					loader: 'babel-loader',
					exclude: /node_modules/,
				}, {
					test: /\.ls$/,
					loader: 'livescript-loader',
				}],
			},
			externals: [
				'react-addons-test-utils',
				'react/lib/ReactContext',
				'react/lib/ExecutionEnvironment',
			],
		},
		reporters: ['spec'],
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
