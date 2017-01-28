/**
 * Created by fimka on 17/01/2017.
 */
var pathLib = require("path");
var server = require('./../WebServer/hujiwebserver');
var STATUS_CODES = require('./../WebServer/httpStandard').STATUS_CODES;

var fs = require("fs");

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

    var ext = requestedFilePath.slice(requestedFilePath.indexOf('.') + 1);
    if(ext === 'css'){
        res.set('content-type', 'text/css');
    } else if(ext === 'js') {
        res.set('content-type', 'application/javascript');
    } else if (ext === "html") {
        res.set('content-type', 'text/html');
    }

    requestedFilePath = '/www' + requestedFilePath;
    requestedFilePath = __dirname + requestedFilePath;
    requestedFilePath = pathLib.normalize(requestedFilePath);

    fs.readFile(requestedFilePath, function (err, data) {
        if (err) {
            res.status(500).send(STATUS_CODES[500]);
            return;
        }

        res.set('content-length', data.toString());
        res.status(200).send(data.toString());
    });


}

server.use(serveHttpFiles);
