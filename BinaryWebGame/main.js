/**
 * Created by fimka on 17/01/2017.
 */
$ = require('jquery');
let fileReader = require('./www/fileReader');
let server = require('./../WebServer/hujiwebserver');
server.start(8081);

//Store the last score
let gambling = {
  ones: 0,
    zeros: 0
};


/**
 * Button “0” means that the user choose “0”
 You should let the server know which number the user chose by sending a message to the “/gamble/0” (POST)
 You should do that using AJAX
 The server should keep counting how many users gambled on each number 0 or 1
 The server should respond with the following JSON: {“zeros”:<numberOfZeros>,”ones”:<numberOfOnes>} the client should announce if the user won/lost/tie and how many users chose each number by adding text/HTML into the screen and hide the “0” and “1” buttons.
 * @param req
 * @param res
 * @param next
 */
function buttonClickResult(req, res, next){

    let currentChoice = req.params.chosenNumber;
    if(currentChoice && gambelingDict.hasOwnProperty(currentChoice))
    {
        // if((currentChoice === 1) && (gambling.ones > gambling.zeros)){
        //     //user won
        //     console.warn("user won");
        // } else if((currentChoice === 0) && (gambling.ones < gambling.zeros)){
        //     //user won
        //     console.warn("user won");
        // } else if(gambling.ones == gambling.zeros){
        //     //tie
        //     console.warn("user tie");
        //
        // } else {
        //     //user lose!
        //     console.warn("user lose");
        //
        // }

        gambling[currentChoice] += 1;
    }
    res.status(200).json(gambling)
}

server.use('/gamble/:chosenNumber', buttonClickResult);

/**
 * Button “new game” that resets the game
 Reset the number of zeros and ones users have chose so far
 You should let the server know by sending “/gamble/reset” (DELETE)
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
