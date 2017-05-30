import React from 'react'

export default class Index extends React.Component {
	componentDidMount() {
		var Game = require('../../game/bundle.commonjs.js').Test;
		var g = new Game();
		g.start();
	}

	render() {
		return (
			<div>
				Test
				<div id="phaser-example"></div>
			</div>
		)
	}
}