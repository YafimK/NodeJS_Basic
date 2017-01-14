/**
 * Created by fimka on 13/01/2017.
 */


let router = function() {
};

router.prototype.controllerSet = new Map();

router.prototype.addRoute = function(path, middleWare)
{
    //TODO: check if middleware is function with typeof
    this.path = path || "/";
    this.controllerSet.set(path, middleWare);
};


function extractHttpMethod(method)
{

}

 router.prototype.httpHandler = function(req) {

     let requestUrl = this.controllerSet.get(req.getPath());
    if (requestUrl) {
        console.log('Found proper action');
        // requestUrl(request,response,'');
    }
    else {
        // let response =
    }
};


exports.router = new router();
