/**
 * Created by fimka on 18/01/2017.
 */
var fs = require("fs");


var fileReader =
{
    debugState: false,
    setDebugState(state){
        this.debugState = true;
        return this;
    },
    readFile(filePath){
        //TODO: make it ASync
        let fileContent;
        try {
            fileContent = fs.readFileSync(filePath);
            console.log("file contents: " + fileContent.toString());
            return fileContent;
        } catch (err) {
            console.error(err);
        }
    }
};


module.exports = {
    fileReader: fileReader
};