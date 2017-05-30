require('pixi');
require('p2');
require('phaser');

var Game = module.exports = function() {};

Game.prototype.start = function() {
	var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create });

	function preload() {

	}

	function create() {

	}
};


