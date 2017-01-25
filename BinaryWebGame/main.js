/**
 * Created by fimka on 17/01/2017.
 */
$ = require('jquery');
let fileReader = require('./www/fileReader');
let server = require('./../WebServer/hujiwebserver');
server.start(8081, function(err){
    if(err !== undefined){
        console.log(err);
    }});

//Store the last score
let gambling = {
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
    let gamblingDict = {1: 'ones', 0: 'zeros'};
    if(!gamblingDict.hasOwnProperty(req.params.chosenNumber)){
        next();
    }
    let currentChoice = gamblingDict[req.params.chosenNumber];
    if(currentChoice)
    {
        gambling[currentChoice] += 1;
    }
    res.status(200).json(gambling)
}
server.use('/gamble/:chosenNumber', buttonClickResult);



/**
 * Serves the main page with the game
 * @param req
 * @param res
 * @param next
 */
function serveHttpFiles(req, res, next){
    let fileHandler = Object.create(fileReader.fileReader);
    fileHandler.setDebugState(true);
    if(req.path === "/"){
        req.path = "/binary.html";
    }
    let ext = req.path.slice(req.path.indexOf('.') + 1);
    if(ext === 'css'){
        res.setContentType('text/css');
    } else if(ext === 'js') {
        res.setContentType("text/javascript");

    } else if (ext === "html") {
        res.setContentType("text/html");
    }
    let htmlFile = fileHandler.readFile('./www' + req.path) || "";
    let buffer = htmlFile.toString();
    res.status(200).send(buffer);
}

server.use(serveHttpFiles);
