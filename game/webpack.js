var webpack = require("webpack");
var minimist = require("minimist");
var argv = require('minimist')(process.argv.slice(2));

var configPath = './webpack.config.js';
var config = require(configPath);

var target = argv["target"] ? argv["target"] : 'var';
var config = new config({ target: target });

var compiler = webpack(config);

function handleBuild(err, stats) {
	console.log(stats.toString({}));
}

compiler.run(handleBuild);