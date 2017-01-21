/**
 * Created by fimka on 06/01/2017.
 */
let net = require("net");
let url = require("url");
let parser = require("./httpParser");
let router = require("./router").router;
let httpResponse = require("./httpResponse");
let STATUS_CODES = require('./httpStandard').STATUS_CODES;


function socketHandler(socket) {
    socket.setKeepAlive(false);
    socket.setTimeout(25000, function ()
    {
        console.log("connection timed out!" + socket.host + ":" + socket.port);
        socket.end();
    });

    socket.on('error', function (err) {
        console.error("Caught error:" + err);
        console.trace(err);
    });

    function treatRequest() {
        if (requestData != "") {
            let dataT = parser.parseDataSeqmant(requestData); //split buffer to parts - catch the type
            if (parser.isHttpRequest(dataT[0])) {
                let httpReq = parser.httpParser(dataT);
                router.httpHandler(httpReq, socket);
            }
            requestData = "";
        }
    }

    socket.on('end', function () {
        //TODO uncomment
        //console.log('server disconnected');
    });

    console.log('CONNECTED: ' + socket.remoteAddress + ':' + socket.remotePort);

    let requestData = "";

    socket.on('data', function (data, err) {
        //TODO uncomment
        console.log("new socket")
        //console.log('received DATA ' + socket.remoteAddress + ': ' + data);
        requestData += data;
        if (err) {
            throw err;
        }

        if (/(\r\n\r\n)/.test(requestData)) {
            try{
                treatRequest();
            }catch(err){
                (new httpResponse(socket, '')).status(500).send(STATUS_CODES[500] +'\r\n'+ err);;
            }


        }
    });

    socket.on('close', function (had_error) {
        if (had_error === true) {
            console.error("connection closed with error");
        }
        //TODO uncomment
        //console.log('CLOSED: ' + socket.remoteAddress + ' ' + socket.remotePort);
    });

}

function ServerObj(port) {
    this.port = port || 8080;
    let server = net.createServer(socketHandler);

    server.listen(this.port);//.setTimeout(25000);
    //TODO uncomment
    //console.log('Server starting on socket: ' + this.port);
     ServerObj.prototype.stop = function() {
        server.close();
    }
}

function defCallback(err) {
    console.error(err)
}


function start(port, callback) {
    this.callback = callback || defCallback;
    this.port = port;
    try {
        //TODO uncomment
        //console.log("starting server with port: " + this.port + " and callback " + this.callback);
        let server = new ServerObj(this.port)
        this.callback();
        return server
    } catch (err) {
        this.callback(err);
    }

}

function use(command, middleware) {
    //Preatify!
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