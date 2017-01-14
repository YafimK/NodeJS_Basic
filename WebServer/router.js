/**
 * Created by fimka on 13/01/2017.
 */


var router = {
    controllerSet: new Map(),
};

router.addRoute = function(path, middleWare)
{
    //TODO: check if middleware is function with typeof
    this.path = path || "/";
    this.controllerSet.set(path, middleWare);
};


function extractHttpMethod(method)
{

}

 router.httpHandler = function(req) {
    let requestUrl = this.controllerSet.get(req.path);
    if (requestUrl) {
        console.log('Found proper action');
        // requestUrl(request,response,'');
    }
    else {
        // let response =
    }
};


module.exports = {
    router: router
};
