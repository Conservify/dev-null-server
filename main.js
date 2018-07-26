var http = require('http');
var finalhandler = require('finalhandler')
var serveStatic = require('serve-static')
 
// Serve up public/ftp folder
var serve = serveStatic('public', {'index': ['index.html']})
 
// Create server
var server = http.createServer(function(req, res) {
  /*
  if (req.method == 'POST') {
    console.log("POST", req.headers['content-type'], req.headers['content-length']);

    let accepted = 0;
    req.on('data', function(data) {
      accepted += data.length;
    });

    req.on('error', function(err) {
      console.log("ERROR", accepted, err);
    });

    req.on('end', function() {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end('Ok');

      console.log("DONE", accepted);
    });
  }
  else {
    console.log("Serve", req.method, req.path);
    serve(req, res, finalhandler(req, res))
  }
  */
  console.log("Serve", req.method, req.path);
  serve(req, res, finalhandler(req, res))
})
 
server.listen(8080, '0.0.0.0')

console.log('Server running at http://0.0.0.0:8080/');
