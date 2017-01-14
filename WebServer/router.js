/**
 * Created by fimka on 13/01/2017.
 */

"use strict";

let httpResponse = require('./httpResponse');

let router = function() {
};


router.prototype.controllerSet =  [];
router.prototype.continueIteration = true;

router.prototype.addRoute = function(path, middleWare)
{
    //TODO: check if middleware is function with typeof
    this.path = path || "/";
    this.controllerSet.push({path: path, middleWare: middleWare});
};

router.prototype.makeRouteHandleIterator = function(originalArr, path) {
    let nextIndex = 0;
    let currentArray;
    //find all relevant routes

    return {
        next: function () {
            currentArray = originalArr.slice(nextIndex);
            if(nextIndex < originalArr.length){
                let currentIdx = 0;
                for(let entry in currentArray){
                    currentIdx++;
                    if(checkMatch(entry.path, path)){
                        nextIndex += currentIdx;
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

 router.prototype.httpHandler = function(req) {
     let httpResponse = new httpResponse();
     let it = this.makeRouteHandleIterator(this.controllerSet, req.getPath());
     if(!it.done){
         it.value.middleWare(req, new httpResponse(), it.next);
     }

};


exports.router = new router();
