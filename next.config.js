const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

module.exports = {
	target: 'serverless',
	webpack: (config) => {
		config.plugins.push(
			new WorkboxWebpackPlugin.InjectManifest({
				swSrc: './src/service-worker.js',
				swDest: '../public/sw.js',
			})
		);
		return config;
	},
};
