/*
 * @Author: oyk
 * @Date:   2017-09-20 12:39:02
 * @Last Modified by:   oyk
 * @Last Modified time: 2017-09-20 13:02:01
 */
module.exports = {
	entry: './src/index.js',
	output: {
		path: __dirname + '/public',
		filename: 'bundle.js'
	},
	module: {
		loaders: [{
			test: /\.json$/,
			loader: 'json-loader'
		}, {
			test: /\.js$/,
			loader: 'babel-loader'
		}]
	}
};