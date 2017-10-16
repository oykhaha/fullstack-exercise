/*
 * @Author: oyk
 * @Date:   2017-09-26 12:06:52
 * @Last Modified by:   oyk
 * @Last Modified time: 2017-09-26 15:37:17
 */
import React from 'react';
import ContestPreview from './ContestPreview';

const ContestList = ({
	contests,
	onContestClick
}) => (
	<div className = 'ContestList'>
		{Object.keys(contests).map(contestId =>
		  <ContestPreview 
		     key={contestId} 
             onClick={onContestClick}
		     {...contests[contestId]} />	
		)}
	</div>

);

ContestList.propTypes = {
	contests: React.PropTypes.object,
	onContestClick: React.PropTypes.func.isRequired,
};

export default ContestList;