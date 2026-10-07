const fs = require('fs');

// Implement Crud operation using node.js 'fs' module

fs.writeFileSync("notes.txt", "Hello Node js")

const data = fs.readFileSync("notes.txt", "utf8")
console.log("Read data : ", data)

// Update file content of the file

fs.appendFileSync("notes.txt", " Hello kaisan ba")


// Delete the file
fs.rmsync("notes.txt")