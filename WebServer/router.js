/**
 * Created by fimka on 13/01/2017.
 */


function router(){

    let controllerSet = new Map();

    function httpHandler(data) {
        let httpAction = data[0];
        let httpUrl = data[1];
        let requestUrl = controllerSet.get(httpUrl);
        if (requestUrl) {
            // requestUrl(request,response,'');
        }
    }


}


module.exports.router = new router();
