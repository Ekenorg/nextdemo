var path = require('path');
var webpack = require('webpack');
var phaserModule = path.join(__dirname, '/node_modules/phaser-ce/');
var phaser = path.join(phaserModule, 'build/custom/phaser-split.js');
var pixi = path.join(phaserModule, 'build/custom/pixi.js');
var p2 = path.join(phaserModule, 'build/custom/p2.js');
var fs = require('fs');
var path = require('path');

module.exports = function(options) {
	return {
		entry: path.resolve(__dirname, 'index.js'),
		output: {
			libraryTarget: options.target,
			filename: 'bundle.' + options.target + '.js',
			library: 'Test'
		},
		node: {
			fs: 'empty'
		},
		plugins: [],
		module: {
			rules: [
				{ test: /pixi\.js/, loader: 'expose-loader?PIXI' },
				{ test: /phaser-split\.js$/, loader: 'expose-loader?Phaser' },
				{ test: /p2\.js/, loader: 'expose-loader?p2' }
			]
		},
		resolve: {
			alias: {
				'phaser': phaser,
				'pixi': pixi,
				'p2': p2
			}
		}
	};
};