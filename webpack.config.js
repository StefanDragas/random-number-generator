const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
	entry: './src/scripts/main.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'scripts/main.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env']
					}
				}
			}
		]
	},
	plugins: [
		new BrowserSyncPlugin({
	        host: 'localhost',
	        port: 3333,
	        files: ['./dist/*.html', './dist/styles/*.css'],
	        server: { baseDir: ['dist'] },
	        open: false
	    })
	]
}