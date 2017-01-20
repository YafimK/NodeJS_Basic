/**
 * Created by fimka on 14/01/2017.
 */

let url = require("url");
let MIME_TYPES = require('./httpStandard').MIME_TYPES;

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
    query: {},
    cookies:{},


    setRequestParams(params) {
        let reqLine = params[0];
        this.setBaseParams(reqLine);
        let headers = params.slice(0);
        let headerRegEx = /(\b[^:]+):\s+([^']+)/g;
        let headerList = {};
        let _this = this;
        headers.forEach(function(row)
        {
            row.trim().replace(headerRegEx, function ($0, param, value) {
                param = param.toString().toLowerCase();
                if(param === "cookie"){
                    let cookieStore = value.split(';');
                    cookieStore.forEach(function(cookie){
                        cookie.replace(/(\w+)\s*=\s*([^']+)/g, function ($0, cookieHeader, cookieField) {
                            _this.cookies[cookieHeader] = cookieField;
                        });});
                    value = _this.cookies;
                 }
                 else if(param === "query"){
                    let queryStore = value.split(';');
                    queryStore.forEach(function(query){
                        query.replace(/(\w+)\s*=\s*([^']+)/g, function ($0, queryHeader, queryField) {
                            _this.query[queryHeader] = queryField;
                        });});
                    value = _this.query;

                }
            headerList[param] = value;
            });
        });
        this.reqHeaders = headerList;
        //TODO path or pathname? path includes query for instance
        this.path = this.reqUrl.pathname
        //TODO if we got this far its http?
        this.protocol = "http";
        this.query = this.parseQuery(this.reqUrl.query);
        this.host = this.reqHeaders["host"];
        //this.cookies = this.reqHeaders["cookie"]
    },
    parseQuery(queryString){
        let returnQuery = {}
        if(!queryString){
            return returnQuery
        }

        let queryStore = queryString.split(';');
        queryStore.forEach(function(query){
            query.replace(/(\w+)\s*=\s*([^']+)/g, function ($0, queryHeader, queryField) {
                returnQuery[queryHeader] = queryField.replace("+"," ");
            });});
        return returnQuery;

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
    param(){

    },
    get(headerName){

        if (!headerName) {
            throw new TypeError('There is no content type');
        }

        if (typeof headerName !== 'string') {
            throw new TypeError('Handle only strings');
        }
        //TODO not sure its work need to check
        return this.reqHeaders[headerName]

    },

    checkMatch(curPath, reqCheckPath) {
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
    },

    is(types){
        var arr = types;

        arr = new Array(arguments.length);
        for (var i = 0; i < arr.length; i++) {

            if (MIME_TYPES.hasOwnProperty(arguments[i])) {
                return this.get('content-type') === arguments[i];
            }

            for (var mimetype in constants.MimeTypes) {
                if (constants.MimeTypes.hasOwnProperty(mimetype)
                    && MIME_TYPES[mimetype].hasOwnProperty('extensions')
                    && MIME_TYPES[mimetype].extensions.indexOf(arguments[i]) >= 0) {

                    return this.get('content-type') === mimetype;


                }
            }
        }
    },

    //TODO add param()
    param(param){
        //TODO do we need a callback function?
        //TODO sanity checks

        if (null != this.params[param] && this.params.hasOwnProperty(param)){
            return params[param];
        }
        if (null != this.query[param]){

        } return this.query[param];

        return {};
    }
};




module.exports = httpRequest;