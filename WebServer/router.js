/**
 * Created by fimka on 13/01/2017.
 */

"use strict";



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



function next(){
    this.continueIteration = true;
}

function checkMatch(curPath, reqCheckPath){
    if(curPath === reqCheckPath){
        return true
    }
}

 router.prototype.httpHandler = function(req) {
     this.continueIteration = true;
     var i = 0
     var curPath = req.getPath()
     while(i < this.controllerSet.length && this.continueIteration) {
         if(checkMatch(entry.path,curPath)){
             this.continueIteration = false;
             this.controllerSet[i].
         }
         i++;
     }



};


exports.router = new router();
