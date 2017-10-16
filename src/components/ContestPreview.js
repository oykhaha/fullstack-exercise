/*
 * @Author: oyk
 * @Date:   2017-09-22 18:59:05
 * @Last Modified by:   oyk
 * @Last Modified time: 2017-10-13 18:35:37
 */
import React, {
	Component
} from 'react';

class ContestPreview extends Component {
	handleClick = () => {
		this.props.onClick(this.props._id);
	}
	render() {
		return (
			<div className="link ContestPreview" onClick={this.handleClick}>
        <div className='category-name'>
        	{this.props.categoryName}
        </div>
        <div className='contest-name'>
        	{this.props.contestName}
        </div>
    </div>

		);
	}
}

ContestPreview.propTypes = {
	_id: React.PropTypes.string.isRequired,
	categoryName: React.PropTypes.string.isRequired,
	contestName: React.PropTypes.string.isRequired,
	onClick: React.PropTypes.func.isRequired,
}


export default ContestPreview;