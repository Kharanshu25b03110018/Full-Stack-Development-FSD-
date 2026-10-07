const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    res.end("Home page");
  }
  else if (req.method === "POST" && req.url === '/submit') {
    res.end("Object Added");
  }
  else {
     res.end("404 page not found");
  }
});
server.listen (3000, "127.0.0.1", () => {

console.log("Server is running");

})