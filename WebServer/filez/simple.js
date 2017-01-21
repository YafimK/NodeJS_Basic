const fs = require('fs');

//minimal usage main.js:
var myHTTPserver = require('./hujiwebserver');

// Create a tester test.js (and add it to the EX zip ) that calls your module and starts it on port 8080. It registers the following commands/middlewares
// /hello/world should return string hello world with content-type text/plain
// /add/:n/:m should return the json: {result:n*m} with content-type application/json
// /filez/* should return the file * from the filez folder (that you should add to the EX zip).
// * can be recursive e.g. /dgsd/dfdf/sfsfs.html <- in this case you should read the <your main js file path>/filez/dgsd/dfdf/sfsfs.html
// You should only support .html .css and .js files. You should return the right content-type for those :
// *.js: JavaScript : application/javascript
// *.html: HTML: text/html
// *.css: CSS: text/css

// USE RUNS
myHTTPserver
    .use('/hello/world', // /hello/world should return string hello world with content-type text/plain
        function(rq,rs,n) {
            rs.set('content-type','text/plain');
            rs.send('hello world');
        })
    .use('/add/:n/:m', // /add/:n/:m should return the json: {result:n*m} with content-type application/json
        function(rq,rs,n) {
            rs.set('content-type','application/json');
            rs.json({result: rq.params.n * rq.params.m});
        })
    .use('/filez/*', // /filez/* should return the file * from the filez folder (that you should add to the EX zip).
        function(rq,rs,n) {
            const filename = rq.path.substr(1);

            if (filename.endsWith('.js')) {
                rs.set('content-type','application/javascript');

            } else if (filename.endsWith('.html')) {
                rs.set('content-type','text/html');

            } else if (filename.endsWith('.css')) {
                rs.set('content-type','text/css');

            } else {
                // TODO 404
                console.log('print');
                return;
            }

            fs.readFile(filename, function (err, data) {
                if (err) {
                    console.log('print2', err);
                    // TODO server error?
                    return;
                }

                // TODO non-ascii chars are broken
                rs.set('content-length', data.toString());
                rs.send(data.toString());
            });
        });

var server = myHTTPserver.start(8080, function(err){console.log(err);});

var http = require('http');
setTimeout(function() {
    // http.request(
    //     {host: 'localhost', port: 8080,  path: '/hello/world'},
    //     function(response) {
    //         response.on('data', function(data) {console.log(data.toString());})
    //     }).end();

    // http.request(
    //     {host: 'localhost', port: 8080,  path: '/add/3/2'},
    //     function(response) {
    //         response.on('data', function(data) {console.log(data.toString());})
    //     }).end();


    http.request(
        {host: 'localhost', port: 8080,  path: '/filez/simple.html'},
        function(response) {
            response.on('data', function(data) {console.log(data.toString());})
        }).end();

    // setTimeout(server.stop, 1000);
}, 1000);

//
//var server = httpServer.start(8080, function(err){console.log(err);});


//// GET RUNS
//var http = require('http');

//setTimeout(function() {
//http.request({host: 'localhost', port: 8080,  path: '/add/1/2'}, function(response) {console.log(response);}).end();
//setTimeout(server.stop, 1000);
//}, 1000);

//setTimeout(function() {
//http.request({host: 'localhost', port: 8080,  path: '/add/grish/eran'}, function(response) {console.log(response);}).end();
//setTimeout(server.stop, 1000);
//}, 2000);

//setTimeout(function() {
//http.request({host: 'localhost', port: 8080,  path: '/add2/a2/b2'}, function(response) {console.log(response);}).end();
//setTimeout(server.stop, 1000);
//}, 3000);

//setTimeout(function() {
//http.request({host: 'localhost', port: 8080,  path: '/add3/grish/b3'}, function(response) {console.log(response);}).end();
//setTimeout(server.stop, 1000);
//}, 4000);
