var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'app');
var login = path.normalize(APP_DIR + '\\login.jsx');
var game = path.normalize(APP_DIR + '\\game.jsx');

var config = {
    entry: {
        login,
        game
    },
    output: {
        path: BUILD_DIR,
        filename: '[name].js'
    },
    module : {
        loaders : [
            {
                test : /\.jsx?/,
                include : APP_DIR,
                loader : 'babel-loader'
            }
        ]
    }

};

module.exports = config;
