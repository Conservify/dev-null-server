var http = require('http');

http.createServer(function(req, res) {
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
    console.log("GET");

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Ok');
  }  
}).listen(8080, "0.0.0.0");

console.log('Server running at http://0.0.0.0:8080/');
