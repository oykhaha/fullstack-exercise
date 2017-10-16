/*
 * @Author: oyk
 * @Date:   2017-09-21 19:33:02
 * @Last Modified by:   oyk
 * @Last Modified time: 2017-09-21 19:35:12
 */
import React from 'react';

const Header = ({
	message
}) => {
	return (
		<h2 className= "Header text-center">
          {message}
	   </h2>
	);
};

export default Header;