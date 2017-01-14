/**
 * Created by fimka on 13/01/2017.
 */




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
    "use strict";
    this.continueIteration = true;
}

function checkMatch(curPath, reqCheckPath){
    "use strict";
    if(curPath === reqCheckPath){
        return true
    }
}

 router.prototype.httpHandler = function(req) {
     this.continueIteration = true;
     var i = 0
     var curPath = req.getPath()
     while(i < this.controllerSet.length && this.continueIteration) {
         "use strict";
         if(checkMatch(entry.path,curPath)){
             this.continueIteration = false;
             entry.middleware
         }
         i++;
     }



};


exports.router = new router();
