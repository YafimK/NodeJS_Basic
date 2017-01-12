/**
 * Created by fimka on 06/01/2017.
 */
let net = require("net");
let url = require("url");

let controllerSet = new Map();

function httpRequest(properties, params, query, method) {
    this.params = params;
    this.query = query;
    this.method = method;
    this.cookies = cookies;
    this.path = path;
    this.host = host;

    constructor(data)
    {

    };
}

function httpHandler(data){
    let httpAction = data[0];
    let httpUrl = data[1];
    let requestUrl = controllerSet.get(httpUrl);
    if(requestUrl)
    {
        requestUrl(request,response,'');
    }
}


function router(socket)
{
    console.log('CONNECTED: ' + socket.remoteAddress +':'+ socket.remotePort);
    socket.on('data', function(data)
    {
        console.log('DATA ' + socket.remoteAddress + ': ' + data);
        const requestData = Buffer.from(data).toString();
        let dataT = requestData.split(/,?\s+/); //split buffer to parts - catch the type
        switch(dataT[2])
        {
            case "HTTP/1.1":
                httpHandler(dataT);
                break;
        }
        socket.write('You said "' + requestData + '"');
    });

    //first step let's analyze the request to see if it's relevent to any of our relevent handlers
    // console.log(request.url);
    // let requestUrl = controllerSet.get(request.url);
    // if(requestUrl)
    // {
    //     requestUrl(request,response,'');
    // }
    socket.on('close', function(data) {
        console.log('CLOSED: ' + socket.remoteAddress +' '+ socket.remotePort);
    });
}

function ServerObj(port) {
    this.port = port || 8080;
    let server = net.createServer(router).listen(this.port).setTimeout(25000);
    console.log('Server starting on socket: '+ this.port);
    function stop()
    {
        server.stop();
    }
}

function defCallback(err){console.error(err)}


function start(port, callback) {
    this.callback = callback || defCallback;
    this.port = port;
    try{
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

function middleware(request, response, next)
{

}

module.exports = {
    use: use,
    start: start,
    middleware: middleware
};