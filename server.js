/*
 * @Author: oyk
 * @Date:   2017-09-20 12:33:05
 * @Last Modified by:   oyk
 * @Last Modified time: 2017-10-13 18:53:02
 */
import config from './config';
import apiRouter from './api';
import express from 'express';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';
import serverRender from './serverRender';
import bodyParser from 'body-parser';

const server = express();

server.use(bodyParser.json());

server.use(sassMiddleware({
	src: path.join(__dirname,
		'sass'),
	dest: path.join(__dirname,
		'public')
}));
server.set('view engine', 'ejs');

server.get(['/', '/contest/:contestId'], (req, res) => {
	serverRender(req.params.contestId)
		.then(({
			initialMarkup,
			initialData
		}) => {
			res.render('index', {
				initialMarkup,
				initialData
			});
		})
		.catch(error => {
			console.error(error);
			res.status(404).send('Bad Request');
		});
});

server.use(express.static('public'));
server.use('/api', apiRouter);


server.listen(config.port, config.host, () => {
	console.info("Express listening on port", config.port);
});