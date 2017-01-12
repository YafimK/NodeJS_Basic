/**
 * Created by fimka on 06/01/2017.
 */

function start(port, callback) {
    //TODO: declare some default for callback
    try{
        var http = require("http");
        var serverObj = http.createServer();


    } catch (err) {
        callback(err);
    }

}

function use(command, middleware){
    //TODO: default for middleware

}

module.exports = {
    start: start,
    use: use
};