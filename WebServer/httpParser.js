/**
 * Created by fimka on 13/01/2017.
 */

//This will be our factory for creating request, response objects.
var url = require("url");
var httpRequest = require('./httpRequest');

function httpParser(data){
    var req = new httpRequest();
    req.method = data[0].trim().split(/\s+/g)[0];
    req.setRequestParams(data);
    //TODO uncomment
    //console.log("Request created: + " + req + " received.");
    return req;
}

function sliceDataSegment(data)
{
    return data.split('\n');
}

function isHttpRequest(str)
{
    var requestType = str.trim().split(/\s+/g);
    var httpCheck = /(HTTP)/g;
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
