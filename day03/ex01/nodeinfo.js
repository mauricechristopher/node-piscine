const http     = require('http');
const nodeinfo = require('nodejs-info');

const server = http.createServer((req, res) => {
    console.log("Request made one" + req.url);
   res.writeHead(200, { "Content-Type": "text/html" });
   res.end(nodeinfo(req));
}).listen(3030, function() {
    console.log("Server is listening on port 3030");
});