var myHTTPserver = require('./hujiwebserver');
var constants = require('./httpConstants');
var fs = require('fs');

var server = myHTTPserver
	//.use('/add/:a/:b/c/:d/e.html', function(rq,rs,n) {console.warn("reponse is start");console.log('USE Func1');rs.send(parseInt(rq.reqHeaders.a)+parseInt(rq.reqHeaders.b)+parseInt(rq.reqHeaders.d));})
    .use('/add/:a/:b/c/:d/e.html', function(rq,rs,n) {
        console.warn("reponse is start");console.log('USE Func1');
        rs.send("papo");
    })
	.use('/add/a/b', function(rq,rs,n) {console.warn("reponse is startuse2");console.log('USE Func2');rs.send(rq.path);})
	.use('/greg/*', function(rq,rs,n) {console.warn("reponse is startuse3");console.log('USE Func3');rs.send(rq.path);})
	.use('/eran/*', // /filez/* should return the file * from the filez folder (that you should add to the EX zip).
	function(rq,rs,n) {
		const filename = rq.path.substr(1);

		if (filename.endsWith('.js')) {
			rs.set('content-type','application/javascript');

		} else if (filename.endsWith('.html')) {
			rs.set('content-type','text/html');

		} else if (filename.endsWith('.css')) {
			rs.set('content-type','text/css');

		} else {
            rs.status(500).send(constants.StatusCodes[500]);
			return;
		}

		fs.readFile(filename, function (err, data) {
			if (err) {
                rs.status(500).send(constants.StatusCodes[500]);
				return;
			}

			// TODO non-ascii chars are broken
			rs.set('content-length', data.toString());
			console.warn("reponse is startunknown");console.log('USE Func4 ','content-type: ', rs.get('content-type'), 'content-length: ',rs.get('content-length'), 'data: ', data.toString())
			rs.send(data.toString());
		});
	})
	.use('/cookies/*', function(rq,rs,n) {console.warn("reponse is startcoockie");console.log('USE Func5');rs.send(rq.cookies);})
	// params after?
	// cookies
	.start(8080, function(err){console.warn("reponse is start-startserver");console.log(err);});

var http = require('http');


setTimeout(function() {
    http.request({host: 'localhost', port: 8080,  path: '/add/1/2/c/3/e.html'}, function(response)
    {
        console.warn("reponse is startnext1");console.log('Req Func1');
        response.on('data', function(data){console.warn("reponse is startdata1.1");console.warn("reponse is startdata1.2");console.log(data.toString());});}).end();
}, 1000);


setTimeout(function() {
    http.request({host: 'localhost', port: 8080,  path: '/add/2/3/c/4'}, function(response)
    {
        console.warn("reponse is startnext2");
        console.log('Req Func2');
        response.on('data', function(data){
            console.warn("reponse is startdata2.1");
            console.log(data.toString());
        })
		;}).end();
}, 1001);

//

//
// setTimeout(function() {
//     http.request({host: 'localhost', port: 8080,  path: '/add/2/3/c/4/'}, function(response) {console.log('Req Func3');
//     response.on('data', function(data){console.log(data.toString());});}).end();
//     }, 300);
// //
// // Different methods we need to support GET/POST/PUT/DELETE/OPTIONS/TRACE
// setTimeout(function() {
//     http.request({host: 'localhost', port: 8080,  path: '/add/2/3/c/4/e.html', method: 'GET'}, function(response) {console.log('Req Func4');response.on('data', function(data){console.log(data.toString());});}).end();
//     }, 400);
//
// setTimeout(function() {
//     http.request({host: 'localhost', port: 8080,  path: '/add/2/3/c/4/e.html', method: 'POST'}, function(response) {console.log('Req Func5');response.on('data', function(data){console.log(data.toString());});}).end();
//     }, 500);
// //
// setTimeout(function() {
//     http.request({host: 'localhost', port: 8080,  path: '/add/2/3/c/4/e.html', method: 'PUT'}, function(response) {console.log('Req Func6');response.on('data', function(data){console.log(data.toString());});}).end();
//     }, 600);
//
// setTimeout(function() {
//     http.request({host: 'localhost', port: 8080,  path: '/add/2/3/c/4/e.html', method: 'OPTIONS'}, function(response) {console.log('Req Func7');response.on('data', function(data){console.log(data.toString());});}).end();
//     }, 700);
//
// setTimeout(function() {
//     http.request({host: 'localhost', port: 8080,  path: '/add/2/3/c/4/e.html', method: 'TRACE'}, function(response) {console.log('Req Func8');response.on('data', function(data){console.log(data.toString());});}).end();
//     }, 800);
//
// setTimeout(function() {
//     http.request({host: 'localhost', port: 8080,  path: '/add/2/3/c/4/e.html', method: 'DELETE'}, function(response) {console.log('Req Func9');response.on('data', function(data){console.log(data.toString());});}).end();
//     }, 900);
//
// // BAD methods
// setTimeout(function() {
//     http.request({host: 'localhost', port: 8080,  path: '/add/2/3/c/4/e.html', method: 'DELETE1'}, function(response) {console.log('Req Func10');response.on('data', function(data){console.log(data.toString());});}).end();
//     }, 1000);
//
// setTimeout(function() {
//     http.request({host: 'localhost', port: 8080,  path: '/add/2/3/c/4/e.html', method: 'ERAN'}, function(response) {console.log('Req Func11');response.on('data', function(data){console.log(data.toString());});}).end();
//     }, 1100);

// // Paths exists/don't
// setTimeout(function() {
//     http.request({host: 'localhost', port: 8080,  path: '/add/a'}, function(response) {console.log('Req Func12');response.on('data', function(data){console.log(data.toString());});}).end();
//     }, 1200);
//
// setTimeout(function() {
//     http.request({host: 'localhost', port: 8080,  path: '/add/a/b'}, function(response) {console.log('Req Func13');response.on('data', function(data){console.log(data.toString());});}).end();
//     }, 1300);
//
// setTimeout(function() {
//     http.request({host: 'localhost', port: 8080,  path: '/add/a/b/'}, function(response) {console.log('Req Func14');response.on('data', function(data){console.log(data.toString());});}).end();
//     }, 1400);
//
// setTimeout(function() {
//     http.request({host: 'localhost', port: 8080,  path: '/add/a/b/c'}, function(response) {console.log('Req Func15');response.on('data', function(data){console.log(data.toString());});}).end();
//     }, 1500);
//
// // recursive runs
//
// setTimeout(function() {
//     http.request({host: 'localhost', port: 8080,  path: '/greg'}, function(response) {console.log('Req Func16');response.on('data', function(data){console.log(data.toString());});}).end();
//     }, 1600);
//
//
// setTimeout(function() {
//     http.request({host: 'localhost', port: 8080,  path: '/greg/a'}, function(response) {console.log('Req Func17');response.on('data', function(data){console.log(data.toString());});}).end();
//     }, 1700);
//
//
// setTimeout(function() {
//     http.request({host: 'localhost', port: 8080,  path: '/greg/a/'}, function(response) {console.log('Req Func18');response.on('data', function(data){console.log(data.toString());});}).end();
//     }, 1800);
//
//
setTimeout(function() {
    http.request({host: 'localhost', port: 8080,  path: '/greg/a/greg.html'}, function(response) {console.log('Req Func19');response.on('data', function(data){console.log(data.toString());});}).end();
    }, 1900);
//
// file exists/don't
setTimeout(function() {
    http.request({host: 'localhost', port: 8080,  path: '/eran/simple.html'}, function(response) {console.log('Req Func20');response.on('data', function(data){console.log(data.toString());});}).end();
    }, 2000);
//
// setTimeout(function() {
//     http.request({host: 'localhost', port: 8080,  path: '/eran/simple.htm'}, function(response) {console.log('Req Func21');response.on('data', function(data){console.log(data.toString());});}).end();
//     }, 2100);
//
// setTimeout(function() {
//     http.request({host: 'localhost', port: 8080,  path: '/simple.html'}, function(response) {console.log('Req Func22');response.on('data', function(data){console.log(data.toString());});}).end();
//     }, 2200);
//
// setTimeout(function() {
//     http.request({host: 'localhost', port: 8080,  path: '/*/simple.html'}, function(response) {console.log('Req Func23');response.on('data', function(data){console.log(data.toString());});}).end();
//     }, 2300);
//
// // Cookies / params
// setTimeout(function() {
//     http.request({host: 'localhost', port: 8080,  path: '/cookies/simple.html', 'cookie': 'a=6'}, function(response) {console.log('Req Func24');response.on('data', function(data){console.log(data.toString());});}).end();
//     }, 2400);
