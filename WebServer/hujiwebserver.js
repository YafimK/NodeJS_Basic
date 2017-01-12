/**
 * Created by fimka on 06/01/2017.
 */
let http = require("http");
let url = require("url");

var hujiwebserver = function() {};

var ServerObj = function(port) {
    this.port = port || 8080;
    var server = http.createServer().listen(this.port);

    function stop() {
        server.stop();
    }
};

hujiwebserver.prototype.controllerSet = new Set();

hujiwebserver.prototype.start = function(port, callback) {
    function defCallback(err) {
        console.error(err)
    }

    this.callback = callback || defCallback;
    this.port = port;
    try {
        console.error("starting server with port: " + this.port + " and callback " + this.callback);
        return new ServerObj(this.port);
    } catch (err) {
        this.callback(err);
    }

};

hujiwebserver.prototype.use = function(command, middleware) {
    //TODO: default for middleware, command?
    this.command = command || "/";
    //Command should help us diffrinate treatment of URL's.
    // url.parse()..

    return this;

};

hujiwebserver.prototype.middleware = function(request, response, next) {

};

module.exports = new hujiwebserver();