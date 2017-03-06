"use strict";

/**
 * Created by fimka on 14/02/2017.
 */
var pathLib = require("path");
var server = require("../../WebServer/hujiwebserver");
var STATUS_CODES = require("../../WebServer/httpStandard").STATUS_CODES;
var fs = require("fs");
var userDatabase = new Map(); //super safe user database
var gambling = {
    ones: 0,
    zeros: 0
};

server.start(8081, function (err) {
    if (err != undefined) {
        console.log(err);
    }
});

/**
 * Button “new game” that resets the game
 * @param req
 * @param res
 * @param next
 */
function resetGame(req, res, next) {
    var username = req.cookies[sessionUser];
    if (userDatabase.has(username)) {
        gambling.ones = 0;
        gambling.zeros = 0;
    } else {
        res.status(403).send(STATUS_CODES[403]);
    }
}

/**
 *
 * @param req
 * @param res
 * @param next
 */
function buttonClickResult(req, res, next) {
    var username = req.cookies[sessionUser];
    if (userDatabase.has(username)) {
        res.status(200).json(gambling);
        var gamblingDict = { 1: 'ones', 0: 'zeros' };
        if (!gamblingDict.hasOwnProperty(req.params.chosenNumber)) {
            next();
        }
        var currentChoice = gamblingDict[req.params.chosenNumber];
        if (currentChoice) {
            gambling[currentChoice] += 1;
        }
    } else {
        res.status(403).send(STATUS_CODES[403]);
    }
}

function treatLogin(req, res, next) {
    //TODO: check if username is clear
    //TODO: check if it's wirhout user
    //TODO: verify it's POST
    console.log("logging ", req.params);
    var password = req.body || undefined; //TODO: add support in request webserver
    var username = req.params.username || undefined;

    function redirectResponse() {
        //TODO: redirect to game
        res.cookie("sessionUser", username);
        var newPath = "http://" + req.get("Host") + "/www/game.html";
        console.log(newPath);
        res.set("Location", newPath);
        res.status(302).send();
    }

    if (userDatabase.has(username)) {
        if (userDatabase.get(username) === password) {
            redirectResponse();
        } else {
            res.statusCode(403).send(STATUS_CODES[403]);
        }
    } else {
        userDatabase.set(username, password);
        redirectResponse();
    }
}
/**
 * Serves the main page with the game
 * @param req
 * @param res
 * @param next
 */
function serveHttpFiles(req, res, next) {
    var requestedFilePath = "";
    if (req.path === "/") {
        console.log(__dirname);
        requestedFilePath = "/www/Login.html";
    } else {
        requestedFilePath = req.path;
    }

    // requestedFilePath = '/www/' + requestedFilePath;
    requestedFilePath = __dirname + "/../" + requestedFilePath;
    requestedFilePath = pathLib.normalize(requestedFilePath);
    console.log(requestedFilePath);
    fs.readFile(requestedFilePath, function (err, data) {
        if (err) {
            res.status(500).send(STATUS_CODES[500]);
            console.log(err);
            return;
        }

        if (requestedFilePath.endsWith('css')) {
            res.set('content-type', 'text/css');
        } else if (requestedFilePath.endsWith('js')) {
            res.set('content-type', 'application/javascript');
        } else if (requestedFilePath.endsWith('html')) {
            res.set('content-type', 'text/html');
        }

        res.set('content-length', data.toString());
        res.status(200).send(data.toString());
    });
}

server.use('/gamble/reset', resetGame);
server.use('/gamble/:chosenNumber', buttonClickResult);

server.use("/login/:username/", treatLogin);

server.use("/public/*", serveHttpFiles);

server.use("/www/*", serveHttpFiles);