/**
 * Created by fimka on 06/01/2017.
 */
let net = require("net");
let url = require("url");
let parser = require("./httpParser");
let router = require("./router");


function socketHandler(socket) {
    socket.setTimeout(25000, function (timeoutAction) {
        console.log("connection timed out!" + socket.host + ":" + socket.port);
    });

    socket.on('error', function (err) {
        console.error(err);
    });

    socket.on('end', function () {
        console.log('server disconnected');
        if (requestData != "") {
            console.log("RequestData: " + requestData);
            let dataT = parser.parseDataSeqmant(requestData); //split buffer to parts - catch the type
           if(parser.isHttpRequest(dataT[0])){
               httpHandler(dataT);
            }

        }
        // socket.write('You said "' + requestData + '"');
    });

    console.log('CONNECTED: ' + socket.remoteAddress + ':' + socket.remotePort);

    var requestData = "";

    socket.on('data', function (data) {
        console.log('DATA ' + socket.remoteAddress + ': ' + data);
        requestData += data;
    });

    socket.on('close', function (had_error) {
        if (had_error === true) {
            console.error("connection closed with error");
        }
        console.log('CLOSED: ' + socket.remoteAddress + ' ' + socket.remotePort);
    });


    //first step let's analyze the request to see if it's relevent to any of our relevent handlers
    // console.log(request.url);
    // let requestUrl = controllerSet.get(request.url);
    // if(requestUrl)
    // {
    //     requestUrl(request,response,'');
    // }
}

function ServerObj(port) {
    this.port = port || 8080;
    let server = net.createServer(socketHandler);

    server.listen(this.port);//.setTimeout(25000);
    console.log('Server starting on socket: ' + this.port);
    function stop() {
        server.stop();
    }
}

function defCallback(err) {
    console.error(err)
}


function start(port, callback) {
    this.callback = callback || defCallback;
    this.port = port;
    try {
        console.log("starting server with port: " + this.port + " and callback " + this.callback);
        return new ServerObj(this.port);
    } catch (err) {
        this.callback(err);
    }

}

function use(command, middleware) {
    //TODO: default for middleware, command?
    this.command = command || "/";
    controllerSet.set(command, middleware);
    return this;
}

function middleware(request, response, next) {

}

module.exports = {
    use: use,
    start: start,
    middleware: middleware
};