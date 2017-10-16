/*
 * @Author: oyk
 * @Date:   2017-09-20 12:26:44
 * @Last Modified by:   oyk
 * @Last Modified time: 2017-09-27 15:10:30
 */
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

ReactDOM.render(
	<App initialData={window.initialData}/>,
	document.getElementById('root')
);