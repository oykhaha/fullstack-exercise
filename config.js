/*
 * @Author: oyk
 * @Date:   2017-09-20 15:25:26
 * @Last Modified by:   oyk
 * @Last Modified time: 2017-10-13 16:23:28
 */
const env = process.env;

export default {
	mongodbUri: 'mongodb://localhost:27017/test',
	port: env.PORT || 8080,
	host: env.HOST || '127.0.0.1',
	get serverUrl() {
		return `http://${this.host}:${this.port}`;
	}
};