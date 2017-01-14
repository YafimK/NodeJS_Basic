/**
 * Created by fimka on 13/01/2017.
 */

"use strict";

let httpResponse = require('./httpResponse');

let router = function() {
};

router.prototype.controllerSet =  [];

router.prototype.addRoute = function(path, middleWare)
{
    //TODO: check if middleware is function with typeof
    this.path = path || "/";
    this.controllerSet.push({path: path, middleWare: middleWare});
};

router.prototype.makeRouteHandleIterator = function(originalArr, path, req, socket) {
    let nextIndex = 0;
    let currentArray;

    return {
        next: function () {
            currentArray = originalArr.slice(nextIndex);
            if(nextIndex < originalArr.length){
                for(let idx in currentArray){
                    let entry = currentArray[idx];
                    if(checkMatch(currentArray[idx].path, path)){
                        nextIndex += parseInt(idx) + 1
                        let response = new httpResponse(socket, req.type);
                        currentArray[idx].middleWare(req, response, this.next);
                        return {value: entry, done: false}
                    }
                }
            }
            return {done: true};
        }
    }
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
     let it = this.makeRouteHandleIterator(this.controllerSet, req.getPath(), req, socket);
     let result = it.next();
};


exports.router = new router();
