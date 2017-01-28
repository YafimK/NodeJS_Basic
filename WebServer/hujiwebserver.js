/**
 * Created by fimka on 06/01/2017.
 */
var net = require("net");
var url = require("url");
var parser = require("./httpParser");
var router = require("./router").router;
var httpResponse = require("./httpResponse");
var STATUS_CODES = require('./httpStandard').STATUS_CODES;


function socketHandler(socket) {
    socket.setKeepAlive(false);
    socket.setTimeout(25000, function ()
    {
        //console.log("connection timed out!" + socket.host + ":" + socket.port);
        socket.end();
    });

    socket.on('error', function (err) {
        console.error("Caught error:" + err);
        console.trace(err);
    });

    function treatRequest() {
        if (requestData != "") {
            var dataT = parser.parseDataSeqmant(requestData); //split buffer to parts - catch the type
            if (parser.isHttpRequest(dataT[0])) {
                var httpReq = parser.httpParser(dataT);
                router.httpHandler(httpReq, socket);
            }
            requestData = "";
        }
    }

    socket.on('end', function () {
        //console.log('closing socket ' + socket.remotePort);
    });

    //console.log('CONNECTED: ' + socket.remoteAddress + ':' + socket.remotePort);

    var requestData = "";

    socket.on('data', function (data, err) {

        //console.log('received DATA ' + socket.remotePort);
        requestData += data;
        if (err) {
            throw err;
        }

        if (/(\r\n\r\n)/.test(requestData)) {
            try{
                treatRequest();
            }catch(err){
                (new httpResponse(socket, '')).status(500).send(STATUS_CODES[500] +'\r\n'+ err);
            }


        }
    });

    socket.on('close', function (had_error) {
        if (had_error === true) {
            console.error("connection closed with error");
        }
        //console.log('CLOSED:' + socket.remotePort);
    });

}

function ServerObj(port) {
    this.port = port || 8080;
    var server = net.createServer(socketHandler);
    try {
        server.listen(this.port);
        ServerObj.prototype.stop = function () {
            server.close();
        }
    } catch (err){
        throw "Error during opening port for server listen: " + err;
    }

}

function defCallback(err) {
    if(err != '')
    {
        console.error(err);
    }
}


function start(port, callback) {
    this.callback = callback || defCallback;
    this.port = port;
    try {
        //console.log("starting server with port: " + this.port);
        var server = new ServerObj(this.port);
        this.callback();
        return server
    } catch (err) {
        this.callback(err);
    }

}

function use(command, middleware) {
    function invalidUseOfUseFunc() {
        throw "Incorrect arguments: use function must provide path and middle ware or just middle " +
        "ware to be used with default path \"/\" "
    }

    if (arguments.length === 1) {
        if (typeof (arguments[0]) === "function") {
            middleware = arguments[0];
            command = "/";
        }
        else {
            invalidUseOfUseFunc();
        }
    } else if ((arguments.length === 0)) {
        invalidUseOfUseFunc();
    } else {
        if(typeof arguments[1] != "function" || typeof arguments[0] != "string"){
            invalidUseOfUseFunc();
        }
    }



    router.addRoute(command, middleware);

    return this;
}

function middleware(request, response, next) {

}

module.exports = {
    use: use,
    start: start,
    middleware: middleware
};