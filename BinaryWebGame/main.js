/**
 * Created by fimka on 17/01/2017.
 */
var pathLib = require("path");
var server = require('./WebServer/hujiwebserver');
var STATUS_CODES = require('./WebServer/httpStandard').STATUS_CODES;

var fs = require("fs");

//Polyfill to get easy capability to endswith for getting the file extension from ES6
if (!String.prototype.endsWith) {
    String.prototype.endsWith = function(searchString, position) {
        var subjectString = this.toString();
        if (typeof position !== 'number' || !isFinite(position) || Math.floor(position) !== position || position > subjectString.length) {
            position = subjectString.length;
        }
        position -= searchString.length;
        var lastIndex = subjectString.lastIndexOf(searchString, position);
        return lastIndex !== -1 && lastIndex === position;
    };
}


server.start(8081, function(err){
    if(err != undefined){
        console.log(err);
    }});

//Store the last score
var gambling = {
    ones: 0,
    zeros: 0
};

/**
 * Button “new game” that resets the game
 * @param req
 * @param res
 * @param next
 */
function resetGame(req, res, next){
    gambling.ones = 0;
    gambling.zeros = 0;
}

server.use('/gamble/reset', resetGame);

/**
 *
 * @param req
 * @param res
 * @param next
 */
function buttonClickResult(req, res, next){
    res.status(200).json(gambling);
    var gamblingDict = {1: 'ones', 0: 'zeros'};
    if(!gamblingDict.hasOwnProperty(req.params.chosenNumber)){
        next();
    }
    var currentChoice = gamblingDict[req.params.chosenNumber];
    if(currentChoice)
    {
        gambling[currentChoice] += 1;
    }
}
server.use('/gamble/:chosenNumber', buttonClickResult);



/**
 * Serves the main page with the game
 * @param req
 * @param res
 * @param next
 */
function serveHttpFiles(req, res, next){
    var requestedFilePath = "";

    if(req.path === "/"){
        requestedFilePath = "/binary.html";
    } else {
        requestedFilePath = req.path;
    }

    requestedFilePath = '/www' + requestedFilePath;
    requestedFilePath = __dirname + requestedFilePath;
    requestedFilePath = pathLib.normalize(requestedFilePath);

    fs.readFile(requestedFilePath, function (err, data) {
        if (err) {
            res.status(500).send(STATUS_CODES[500]);
            return;
        }

        if(requestedFilePath.endsWith('css')){
            res.set('content-type', 'text/css');
        } else if(requestedFilePath.endsWith('js')) {
            res.set('content-type', 'application/javascript');
        } else if (requestedFilePath.endsWith('html')) {
            res.set('content-type', 'text/html');
        }

        res.set('content-length', data.toString());
        res.status(200).send(data.toString());
    });


}

server.use(serveHttpFiles);
