/*
 * @Author: oyk
 * @Date:   2017-09-20 12:47:24
 * @Last Modified by:   oyk
 * @Last Modified time: 2017-09-20 13:02:22
 */
module.exports = {
	"parser": 'babel-eslint',
	"env": {
		"browser": true,
		"commonjs": true,
		"es6": true,
		"node": true
	},
	"extends": ["eslint:recommended", "plugin:react/recommended"],
	"parserOptions": {
		"ecmaFeatures": {
			"experimentalObjectRestSpread": true,
			"jsx": true
		},
		"sourceType": "module"
	},
	"plugins": ["react"],
	"rules": {
		"indent": ["error", 2],
		"linebreak-style": ["error", "unix"],
		"quotes": ["error", "single"],
		"semi": ["error", "always"],
		"no-console": ["warn", {
			"allow": ["info", "error"]
		}]
	}
};