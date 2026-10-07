import http from 'http';
import fs from 'fs';

const server = http.createServer((req, res, order) => { //req and res are objects , 

    console.log("Hello World");
    res.writeHead(200, {
        "Content-Type" : "text/plain",
        "customer-header" : "Hello World"
    });                         // this is the header of the response which is sent to the client.
   // res.end("Welcome to my server");         // plain text response to the client,
                                             //  it can be html or json as well.
order = {
    id : 3459,
    orderlocation : "Delhi",
    ordername: "Laptop"
}
      
     res.end(JSON.stringify(order))// this is the response which is sent to the client in json format.
                                   // JSON.parse() is used to convert the javascript object to json object
                                   //  JSON.stringify() is used to convert the json object to javascript object.
    


    fs.readFile("text.html", "utf-8", (err, data) => {
        
            console.log(err);
            
    })
    })




const PORT = 3000;
const ADDRESS = "127.0.0.1";

server.listen (PORT, ADDRESS, () => {

console.log("Server is running");

})
// Status code 200 means everything is fine and the request has been fulfilled successfully.
//  201 means that the request has been fulfilled and has resulted in one or more new resources being created.
//  400 means bad request, 404 means not found, 500 means internal server error. 
// 401 means unauthorized, 403 means forbidden, 302 means found, 304 means not modified, 
// 503 means service unavailable.

