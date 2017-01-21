/**
 * Created by fimka on 13/01/2017.
 */

"use strict";
let STATUS_CODES = require('./httpStandard').STATUS_CODES;
let httpResponse = require('./httpResponse');

let router = function() {
};

router.prototype.controllerSet =  [];

router.prototype.addRoute = function(path, middleWare)
{
    //TODO: what if middleware doesn't exist?
    this.path = path || "/";
    var commandParams = {}
    path.split('/').forEach(function (elem, i) {

        if (elem.startsWith(':')) {
            commandParams[elem.substr(1)] = i;
        }
    })
    var command_input ={
        path: this.path,
        command_params: commandParams
    }
    this.controllerSet.push({commandObj: command_input, middleWare: middleWare});
};

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

                    socket.setTimeout(10000, function ()
                    {
                       if(socket.readyState === 3 || socket.readyState === 2){
                           return (new httpResponse(socket, req.type)).status(404).send(STATUS_CODES[404])
                       }
                    });

                    currentArray[idx].middleWare(req, response, next);
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

function checkMatch(curPath, reqCheckPath) {
    var regexOfHandler = "^";
    var regexOfHandlerObj;

    var listOfResource = curPath.split('\/');
    for (var i = 0; i < listOfResource.length; ++i) {
        if (listOfResource[i] !== "") {
            regexOfHandler += "\/";
            if (!(listOfResource[i].match(/:/g))) {
                regexOfHandler += listOfResource[i];
            }
            else {
                regexOfHandler += "(?:([^\/]+?))";
            }
        }
    }
    regexOfHandler += '($|\/)';
    regexOfHandlerObj = new RegExp(regexOfHandler, "i");
    return reqCheckPath.match(regexOfHandlerObj)
}

 router.prototype.httpHandler = function(req, socket) {
     let response = new httpResponse(socket, req.type);
     this.makeRouteHandleIterator(this.controllerSet, req.path, req, response, socket);
};


exports.router = new router();
