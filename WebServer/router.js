/**
 * Created by fimka on 13/01/2017.
 */

"use strict";
let STATUS_CODES = require('./httpStandard').STATUS_CODES;
let httpResponse = require('./httpResponse');

let router = function() {
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
    let commandParams = {}
    path.split('/').forEach(function (elem, i) {

        if (elem.startsWith(':')) {
            commandParams[elem.substr(1)] = i;
        }
    });
    let command_input ={
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
    let nextIndex = 0;
    let currentArray;

    var next =  function () {
        currentArray = originalArr.slice(nextIndex);
        if(nextIndex < originalArr.length){
            for(let idx in currentArray){
                if(checkMatch(currentArray[idx].commandObj.path, path)){
                    nextIndex += parseInt(idx) + 1;
                    let urlParams = req.path.split('/');

                    if(currentArray[idx].commandObj.command_params !== {}){
                        req.params = {}
                    }

                    for (var param in currentArray[idx].commandObj.command_params) {
                        if (currentArray[idx].commandObj.command_params.hasOwnProperty(param)) {
                          req.params[param] = urlParams[currentArray[idx].commandObj.command_params[param]]
                        }
                    }

                    const timeout = setTimeout(function ()
                    {
                        if(socket.readyState !== 3){
                            console.log('Middleware times out.')
                            var res = (new httpResponse(socket, req.type)).status(404).send(STATUS_CODES[404])
                        }
                    },10000);

                    currentArray[idx].middleWare(req, response, next);
                    clearTimeout(timeout)
                    return {done: true}
                }
            }
        }
        let errorRes = (new httpResponse(socket, req.type));
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
    let matchRegex = "^";
    let matchRegexObject;

    let splitPath = curPath.split('\/');
    for (let i = 0; i < splitPath.length; i++) {
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
     let response = new httpResponse(socket, req.type);
     this.makeRouteHandleIterator(this.controllerSet, req.path, req, response, socket);
};


exports.router = new router();
