/**
 * Created by fimka on 13/01/2017.
 */


var router = {
    controllerSet: new Map(),
};

router.addRoute = function(path)
{
    this.path = path || "/";
    controllerSet.set(path, middleware);
};


function extractHttpMethod(method)
{

}

 router.httpHandler = function(req) {
    // let httpAction = data[0];
    // let httpUrl = data[1];
    // let requestUrl = this.controllerSet.get(httpUrl);
    // if (requestUrl) {
    //     // requestUrl(request,response,'');
    // }
};


module.exports = router;
