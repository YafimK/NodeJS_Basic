/**
 * Created by fimka on 13/01/2017.
 */

//This will be our factory for creating request, response objects.
let url = require("url");
let httpRequest = require('./httpRequest');

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
