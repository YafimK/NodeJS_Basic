/**
 * Created by fimka on 14/01/2017.
 */

let url = require("url");
let MIME_TYPES = require('./httpStandard').MIME_TYPES;
let CR = '\r';
let LF = '\n';
let CRLF = '\r\n';

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
        let headers = params.slice(1);
        let headerRegEx = /(\b[^:]+):\s+([^']+)/g;
        let headerList = {};
        let _this = this;
        var matchPram = false
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
                 else if(param.toLowerCase() === 'content-type' && value.indexOf('; charset=') >= 0){
                    value = value.trim().substr(0, value.indexOf('; charset='));
                 }
                matchPram = true
                headerList[param] = value;
            });
            if(!matchPram){
                if(row === CRLF || row === LF || row === CR ){
                    matchPram = false
                }
                else{
                    if(!headerList['content-type'] === false && headerList['content-type'] === 'application/json'){
                        _this.body = JSON.parse(row.trim());

                    }
                    else if(!headerList['content-type'] === false && headerList['content-type'] === 'application/x-www-form-urlencoded'){
                        var bodyObj = {};

                        row.trim().split('&').forEach(function (elem) {
                                var matches = elem.trim().split('=');
                                bodyObj[matches[0]] = matches[1];
                            });

                        _this.body = bodyObj;
                     }
                    else{
                        _this.body = row.trim().toString()
                    }
                }
            }
            matchPram = false
        });
        this.reqHeaders = headerList;
        this.path = this.reqUrl.pathname
        this.protocol = this.type
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
        return this.reqHeaders[headerName.toLowerCase()]

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

            for (var mimetype in MIME_TYPES) {
                if (MIME_TYPES.hasOwnProperty(mimetype)
                    && MIME_TYPES[mimetype].hasOwnProperty('extensions')
                    && MIME_TYPES[mimetype].extensions.indexOf(arguments[i]) >= 0) {

                    return this.get('content-type') === mimetype;


                }
            }
        }
    },

    param(param, callback){
        if (null != this.body[param]){
            return this.body[param];
        }

        if (null != this.params[param] && this.params.hasOwnProperty(param)){
            return this.params[param];
        }
        if (null != this.query[param]){

        } return this.query[param];


        return callback;
    }
};




module.exports = httpRequest;