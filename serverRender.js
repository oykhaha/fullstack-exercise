/*
 * @Author: oyk
 * @Date:   2017-09-25 13:32:01
 * @Last Modified by:   oyk
 * @Last Modified time: 2017-10-13 18:33:09
 */
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import config from './config';
import axios from 'axios';
import App from './src/components/App';

const getApiUrl = contestId => {
	if (contestId) {
		return `${config.serverUrl}/api/contests/${contestId}`;
	}
	return `${config.serverUrl}/api/contests`;
};


const getInitialData = (contestId, apiData) => {
	if (contestId) {
		return {
			currentContestId: apiData._id,
			contests: {
				[apiData._id]: apiData
			}
		};
	}
	return {
		contests: apiData.contests
	};
};



const serverRender = (contestId) =>
	axios.get(getApiUrl(contestId))
	.then(resp => {
		const initialData = getInitialData(contestId, resp.data);
		return {
			initialMarkup: ReactDOMServer.renderToString(
				<App initialData={initialData} />),

			initialData
		};

	});

export default serverRender;