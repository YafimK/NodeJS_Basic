/**
 * Created by fimka on 14/01/2017.
 */

let url = require("url");

var httpMethods = ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'TRACE'];
var httpRequest = {
    reqHeaders: {},
    reqUrl: '',
    method: '',
    type: '',
    setRequestParams(params) {
        let reqLine = params[0];
        this.setBaseParams(reqLine);
        let headers = params.slice(1);
        let headerRegEx = /(\b[^:]+):\s+([^']+)/g;
        let headerList = {};
        headers.forEach(function(row)
        {
            row.trim().replace(headerRegEx, function ($0, param, value) {
                headerList[param] = value;
            });
        });
        this.reqHeaders = headerList;
    },
    setBaseParams(request){
        let requestType = request.trim().split(/\s+/g);
        this.setHttpMethod(requestType[0]);
        this.setHttpUrl(requestType[1]);
        this.setHttpType(requestType[2]);
    },
    setHttpUrl(reqUrl){
        this.reqUrl = url.parse(reqUrl)
    },
    setHttpMethod(method){
        this.method = method;
    },
    setHttpType(type){
        this.type = type.trim();
    },
    getPath(){
        return this.reqUrl.path;
    }
};

module.exports = httpRequest;