var net = require('net');
var request = require('./request');
var response = require('./response');
var constants = require('./httpConstants');

var RequestHandler = function(command, middleware) {
    this.command = command;
    this.middleware = middleware;
};

var commands = [];

module.exports = {

    use: function(command, middleware) {
        commands.push(new RequestHandler(command, middleware));
        return this;
    },

    start: function(port, callback){
        var server = net.createServer(function (socket) {

            socket.on('error', function (err) {
                socket.end();
                callback('hujiwebserver socket error: ' + err);
            });

            socket.setTimeout(3000, function() {
                if (socket.isDataSent) {
                    socket.statusCode(408).end(constants.StatusCodes[408]);
                } else {
                    socket.end();
                }
            });

            var dataChunks = [];

            socket.on('data', function (data) {
                dataChunks.push(data.toString());

                var req = new request(dataChunks[dataChunks.length-1]);
                if (req.get('connection') === 'close') {
                    try {

                        // parse request
                        req = new request(dataChunks.join());

                        // create response
                        var res = new response(socket, req);

                        // Check method is one of
                        if (constants.Methods.indexOf(req.method) < 0) {
                            res.status(405).send(constants.StatusCodes[405]);
                            return;
                        }

                        // next method will signal if the server should find next middleware
                        // for this request. If after current middleware call
                        // nextHandler._next === true, continue
                        var middlewareContinueChain = {
                            _continue: false,
                            _finished: false,

                            chain: function () {
                                this._continue = true;
                            },

                            reset: function () {
                                this._continue = false;
                                this._finished = false;
                            },

                            finish: function() {
                                this._finished = true;
                            }
                        };

                        var next = function () {
                            middlewareContinueChain.chain.apply(middlewareContinueChain);
                        };


                        var lastMatchedIndex = 0;
                        var requestHandled = false;

                        // in case next was called continue searching from last place
                        for (; lastMatchedIndex < commands.length; lastMatchedIndex++) {

                            if (req.path.match(new RegExp(commands[lastMatchedIndex]
                                    .command.replace(/:[^/]+/g, '[^/]+')))) {

                                requestHandled = true;

                                var paramNames = {};
                                var paramValues = req.path.split('/');

                                commands[lastMatchedIndex].command
                                    .split('/')
                                    .forEach(function (elem, i) {
                                        if (elem[0] === ':') { // TODO handle ::
                                            paramNames[elem.substr(1)] = i;
                                        }
                                    });

                                for (var param in paramNames) {
                                    req.params[param] = paramValues[paramNames[param]];
                                }

                                // Timeout of handling middleware
                                const mwTimeout = setTimeout(function () {
                                    if (!middlewareContinueChain._finished) {
                                        res.status(404).send(constants.StatusCodes[404]);
                                    }
                                }, 10000);

                                commands[lastMatchedIndex].middleware(req, res, next);

                                clearTimeout(mwTimeout);

                                middlewareContinueChain.finish();

                                if (!middlewareContinueChain._continue) {
                                    break;
                                }

                                middlewareContinueChain.reset();
                            }
                        }

                        if (!requestHandled) {
                            // No matching middleware, respond 'Not Found'
                            res.status(404).send(constants.StatusCodes[404]);
                        }
                    } catch (err) {
                        (new response(socket, '')).status(500).send(constants.StatusCodes[500] + constants.CRLF + err);
                    }
                }
            });

            socket.on('end', function () {

            });
        });

        // bind stop to net.Server.close
        server.stop = server.close;

        try {
            // start listening for connections
            server.listen(port);

            return server;

        } catch (err) {
            // could not start server
            callback('hujiwebserver server error: ' + err);
            return undefined;
        }
    }
};