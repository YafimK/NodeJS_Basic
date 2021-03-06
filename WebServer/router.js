/**
 * Created by fimka on 13/01/2017.
 */

"use strict";

var STATUS_CODES = require('./httpStandard').STATUS_CODES;
var httpResponse = require('./httpResponse');

/**
 * Polyfill for startsWith
 */
if (!String.prototype.startsWith) {
    String.prototype.startsWith = function(searchString, position){
        position = position || 0;
        return this.substr(position, searchString.length) === searchString;
    };
}


var router = function() {
};

router.prototype.controllerSet =  [];
/**
 * Adds commands invoked from use.
 * @param path
 * @param middleWare
 */
router.prototype.addRoute = function(path, middleWare)
{
    this.path = path || "/";
    var commandParams = {};
    path.split('/').forEach(function (elem, i) {

        if (elem.startsWith(':')) {
            commandParams[elem.substr(1)] = i;
        }
    });
    var command_input ={
        path: this.path,
        command_params: commandParams
    };
    this.controllerSet.push({commandObj: command_input, middleWare: middleWare});
};

/**
 * Runs on the path of the request aginst commands from use function
 * if match detected invoke the suitable method.
 * @param originalArr
 * @param path
 * @param req
 * @param response
 * @param socket
 */

router.prototype.makeRouteHandleIterator = function(originalArr, path, req, response, socket) {
    var nextIndex = 0;
    var currentArray;

    var next = function () {
        currentArray = originalArr.slice(nextIndex);
        if (nextIndex < originalArr.length) {
            for (var idx in currentArray) {
                if(currentArray.hasOwnProperty(idx)) {
                    if (checkMatch(currentArray[idx].commandObj.path, path)) {
                        nextIndex += parseInt(idx) + 1;
                        var urlParams = req.path.split('/');

                        if (currentArray[idx].commandObj.command_params !== {}) {
                            req.params = {}
                        }

                        for (var param in currentArray[idx].commandObj.command_params) {
                            if (currentArray[idx].commandObj.command_params.hasOwnProperty(param)) {
                                req.params[param] = urlParams[currentArray[idx].commandObj.command_params[param]]
                            }
                        }

                        const timeout = setTimeout(function () {
                            if (socket.readyState !== 3) {
                                console.log('Middleware times out.');
                                return (new httpResponse(socket, req.type)).status(404).send(STATUS_CODES[404])
                            }
                        }, 10000);

                        currentArray[idx].middleWare(req, response, next);
                        clearTimeout(timeout);
                        return {done: true};
                    }
                }
            }
        }
        var errorRes = (new httpResponse(socket, req.type));
        errorRes.status(404).send(STATUS_CODES[404]);
        return {done: true};
    };
    return next();
};
/**
 * Checks match between current path to current command path
 * we examine
 * @param curPath
 * @param reqCheckPath
 * @return array of groups if there is match otherwise undefined.
 */

function checkMatch(curPath, reqCheckPath) {
    var matchRegex = "^";
    var matchRegexObject;

    var splitPath = curPath.split('\/');
    for (var i = 0; i < splitPath.length; i++) {
        if (splitPath[i] !== "") {
            matchRegex += "\/";
            if ((splitPath[i].match(/:/g))) {

                matchRegex += "(?:([^\/]+?))";
            }
            else {
                matchRegex += splitPath[i];

            }
        }
    }
    matchRegex += '($|\/)';
    matchRegexObject = new RegExp(matchRegex, "i");
    return reqCheckPath.match(matchRegexObject);
}
/**
 * Operate middleware handler generator.
 * @param req
 * @param socket
 */

 router.prototype.httpHandler = function(req, socket) {
     var response = new httpResponse(socket, req.type);
     this.makeRouteHandleIterator(this.controllerSet, req.path, req, response, socket);
};


exports.router = new router();
