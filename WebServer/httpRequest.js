/**
 * Created by fimka on 14/01/2017.
 */

let url = require("url");

var httpMethods = ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'TRACE'];
var httpRequest = {
    reqHeaders: {},
    params: {},
    reqUrl: '',
    method: '',
    type: '',
    path: '',
    protocol: '',
    host: '',
    query: '',
    cookies:'',


    setRequestParams(params) {
        let reqLine = params[0];
        this.setBaseParams(reqLine);
        let headers = params.slice(0);
        let headerRegEx = /(\b[^:]+):\s+([^']+)/g;
        let headerList = {};
        headers.forEach(function(row)
        {
            row.trim().replace(headerRegEx, function ($0, param, value) {
                headerList[param] = value;
            });
        });
        this.reqHeaders = headerList;
        //TODO path or pathname? path includes query for instance
        this.path = this.reqUrl.path
        //TODO if we got this far its http?
        this.protocol = "http"
        this.query = this.reqUrl.query
        this.host = this.reqHeaders["host"]
        this.cookies = this.reqHeaders["cookie"]
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
    },

    get(contentType){

        if (!contentType) {
            throw new TypeError('There is no content type');
        }

        if (typeof contentType !== 'string') {
            throw new TypeError('Handle only strings');
        }
        //TODO not sure its work need to check
        return this.reqHeaders[contentType]

    }

    //TODO need to add is() function
    //TODO add param()
};


module.exports = httpRequest;