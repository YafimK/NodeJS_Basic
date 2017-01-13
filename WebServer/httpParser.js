/**
 * Created by fimka on 13/01/2017.
 */

//This will be our factory for creating request, response objects.
let url = require("url");

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
    }
};

function httpParser(data){
    let req = Object.create(httpRequest);
    req.setRequestParams(data);
    console.log("Request created: + " + req + " received.");
    return req;
}

function sliceDataSegment(data)
{
    return data.split('\n');
}

function isHttpRequest(str)
{
    let requestType = str.trim().split(/\s+/g);
    let httpCheck = /(HTTP)/g;
    if(requestType[2].match(httpCheck).length > 0)
    {
        return true;
    }
    return false;
}




module.exports = {
    httpRequest: httpRequest,
    httpParser: httpParser,
    parseDataSeqmant: sliceDataSegment,
    isHttpRequest: isHttpRequest
};
