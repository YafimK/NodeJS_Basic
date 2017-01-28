/**
 * Created by fimka on 14/01/2017.
 */

var url = require("url");
var MIME_TYPES = require('./httpStandard').MIME_TYPES;
var CR = '\r';
var LF = '\n';
var CRLF = '\r\n';

var httpMethods = ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'TRACE'];
function httpRequest() {
    this.reqHeaders = {};
    this.params = {};
    this.reqUrl = '';
    this.method = '';
    this.type = '';
    this.path = '';
    this.protocol = '';
    this.host = '';
    this.query = {};
    this.cookies = {};
}

/**
 * Parse and set request params
 * @param params
 */
httpRequest.prototype.setRequestParams = function (params) {
    var reqLine = params[0];
    this.setBaseParams(reqLine);
    var headers = params.slice(1);
    var headerRegEx = /(\b[^:]+):\s+([^']+)/g;
    var headerList = {};
    var _this = this;
    var matchPram = false;
    headers.forEach(function (row) {
        row.trim().replace(headerRegEx, function ($0, param, value) {
            param = param.toString().toLowerCase();
            if (param === "cookie") {
                var cookieStore = value.split(';');
                cookieStore.forEach(function (cookie) {
                    cookie.replace(/(\w+)\s*=\s*([^']+)/g, function ($0, cookieHeader, cookieField) {
                        _this.cookies[cookieHeader] = cookieField;
                    });
                });
                value = _this.cookies;
            }
            else if (param.toLowerCase() === 'content-type' && value.indexOf('; charset=') >= 0) {
                value = value.trim().substr(0, value.indexOf('; charset='));
            }
            matchPram = true;
            headerList[param] = value;
        });
        if (!matchPram) {
            if (row === CRLF || row === LF || row === CR) {
                matchPram = false
            }
            else {
                if (!headerList['content-type'] === false && headerList['content-type'] === 'application/json') {
                    _this.body = JSON.parse(row.trim());

                }
                else if (!headerList['content-type'] === false && headerList['content-type'] === 'application/x-www-form-urlencoded') {
                    var bodyObj = {};

                    row.trim().split('&').forEach(function (elem) {
                        var matches = elem.trim().split('=');
                        bodyObj[matches[0]] = matches[1];
                    });

                    _this.body = bodyObj;
                }
                else {
                    _this.body = row.trim().toString()
                }
            }
        }
        matchPram = false
    });
    this.reqHeaders = headerList;
    this.path = this.reqUrl.pathname;
    this.host = this.reqHeaders["host"].split(':')[0];
    this.query = this.parseQuery(this.reqUrl.query);
    //this.cookies = this.reqHeaders["cookie"]
};

/**
 * Parse query to field and values.
 * @returns query object
 * @param queryString
 */
httpRequest.prototype.parseQuery = function (queryString) {
    var returnQuery = {};
    if (!queryString) {
        return returnQuery;
    }

    var queryStore = queryString.split(';');
    queryStore.forEach(function (query) {
        query.replace(/(\w+)\s*=\s*([^']+)/g, function ($0, queryHeader, queryField) {
            returnQuery[queryHeader] = queryField.replace("+", " ");
        });
    });
    return returnQuery;

};

/**
 * Set basic parameters from the request
 * @param request
 */
httpRequest.prototype.setBaseParams = function (request) {
    var requestType = request.trim().split(/\s+/g);
    this.setHttpMethod(requestType[0]);
    this.setHttpUrl(requestType[1]);
    this.setHttpType(requestType[2]);
    this.protocol = this.type.trim().toLocaleLowerCase();
    var protocolLineArr = this.protocol.split('/');
    if (protocolLineArr) {
        this.protocol = protocolLineArr[0].toLocaleLowerCase();
    }
};

httpRequest.prototype.setHttpUrl = function (reqUrl) {
    this.reqUrl = url.parse(reqUrl)
};

/**
 * Setter for method.
 * @param method
 */
httpRequest.prototype.setHttpMethod = function (method) {
    this.method = method;
};

/**
 * Setter for type.
 * @param type
 */
httpRequest.prototype.setHttpType = function (type) {
    this.type = type.trim();
};

/**
 * Returns the specified HTTP request header field (case-insensitive match).
 * The Referrer and Referer fields are interchangeable.
 * @param headerName.
 * @return asked header value if found
 */
httpRequest.prototype.get = function (headerName) {

    if (!headerName || typeof headerName !== 'string') {
        throw new TypeError('Please send string param');
    }

    return this.reqHeaders[headerName.toLowerCase()]

};

/**
 *  Returns the specified HTTP request header field (case-insensitive match).
 *  The Referrer and Referer fields are interchangeable.e.
 * @param types
 * @return boolean if found otherwise false.
 */
httpRequest.prototype.is = function (types) {
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
};

/**
 * Returns the value of param name when present.
 * @param param
 * @param callback
 * @return value of param if found.
 */
httpRequest.prototype.param = function (param, callback) {
    if (!param || typeof param !== 'string') {
        throw Error("We need param to check")
    }
    if (!callback) {
        callback = undefined
    }


    if (null != this.body[param]) {
        return this.body[param];
    }

    if (null != this.params[param] && this.params.hasOwnProperty(param)) {
        return this.params[param];
    }
    if (null != this.query[param]) {
        return this.query[param];

    }


    return callback;
};

module.exports = httpRequest;