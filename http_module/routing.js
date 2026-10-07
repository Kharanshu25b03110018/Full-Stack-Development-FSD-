import http from 'http';
import fs from 'fs';
const data = fs.readFileSync("text.html", "utf-8");
const server = http.createServer((req, res,) => {
    //res.end("Welcome to the server : ")
    
    if(req.url === "/") {
        res.writeHead(200, {
            "Content-Type" : "text/html"
        });
        res.end(data);
    }
    else if(req.url === "/contact") {
        res.writeHead(200, {
            "Content-Type" : "text/html"
        });
        res.end(data);
    }
    else if(req.url === "/projects") {
        res.writeHead(200, {
            "Content-Type" : "text/html"
        });
        res.end(data);
    }
else {
    res.statusCode = 404;
    res.end("404 page not found");
}
})


server.listen (3000, "127.0.0.1", () => {

console.log("Server is running");

})

//file based routing is done using fs module and path module.

//resource based routing is done using http module and express module.