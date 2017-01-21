/**
 * Created by fimka on 12/01/2017.
 * /hello/world should return string hello world with content-type text/plain
 /add/:n/:m should return the json: {result:n*m} with content-type application/json
 /filez/* should return the file * from the filez folder (that you should add to the EX zip).
 * can be recursive e.g. /dgsd/dfdf/sfsfs.html <- in this case you should read the <your main js file path>/filez/dgsd/dfdf/sfsfs.html
 You should only support .html .css and .js files. You should return the right content-type for those :
 *.js: JavaScript : application/javascript
 *.html: HTML: text/html
 *.css: CSS: text/css

 */

const fs = require('fs');
let STATUS_CODES = require('./httpStandard').STATUS_CODES;

var httpServer = require('./hujiwebserver');


// USE RUNS
httpServer
    .use('/hello/world',
        function(rq,rs,n) {
            rs.set('content-type','text/plain');
            rs.send('hello world');
        })
    .use('/add/:n/:m',
        function(rq,rs,n) {
            rs.set('content-type','application/json');
            rs.json({result: rq.params.n * rq.params.m});
        })
    .use('/filez/*',
        function(rq,rs,n) {
            const filename = rq.path.substr(1);

            if (filename.endsWith('.js')) {
                rs.set('content-type','application/javascript');

            } else if (filename.endsWith('.html')) {
                rs.set('content-type','text/html');

            } else if (filename.endsWith('.css')) {
                rs.set('content-type','text/css');

            } else {
                rs.status(500).send(STATUS_CODES[500]);
                return;
            }

            fs.readFile(filename, function (err, data) {
                if (err) {
                    rs.status(500).send(STATUS_CODES[500]);
                    return;
                }

                rs.set('content-length', data.toString());
                rs.send(data.toString());
            });
        });

var server = httpServer.start(8080, function(err){console.log(err);});

var http = require('http');
setTimeout(function() {
    http.request(
        {host: 'localhost', port: 8080,  path: '/hello/world'},
        function(response) {
            response.on('data', function(data) {console.log(data.toString());})
        }).end();

    http.request(
        {host: 'localhost', port: 8080,  path: '/add/7/6'},
        function(response) {
            response.on('data', function(data) {console.log(data.toString());})
        }).end();


    http.request(
        {host: 'localhost', port: 8080,  path: '/filez/simple.js'},
        function(response) {
            response.on('data', function(data) {console.log(data.toString());})
        }).end();

    setTimeout(server.stop, 1000);
}, 1000);