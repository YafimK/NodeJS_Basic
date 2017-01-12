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
    //TODO: declare some default for callback, callback??
    this.callback = callback || function defCallback(err){console.error(err);};
    this.port = port;
    try{
        console.debug().log("starting server with port: " + this.port + " and callback " + this.callback);
        return new ServerObj(this.port);
    } catch (err) {
        this.callback(err);
    }

}

function use(command, middleware){
    //TODO: default for middleware, command?




    return this;

}

function middleware(request,response,next){



}

module.exports = {
    start: start,
    use: use
};