const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'public');
const APP_DIR = path.resolve(__dirname, 'app');
const login = path.resolve(APP_DIR, 'login.jsx');
const game = path.resolve(APP_DIR, 'game.jsx');

let config = {
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
