/**
 * Created by fimka on 06/01/2017.
 */

var http = require("http");

function ServerObj(port) {
    this.port = port || 8080;
    var server = http.createServer().listen(this.port);
    function stop()
    {
        server.stop();
    }


}


function start(port, callback) {
    //TODO: declare some default for callback
    try{
        console.debug().log("starting server with port: " + port + " and callback " + callback);
        return new ServerObj(port);
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