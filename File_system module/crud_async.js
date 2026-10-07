const fs = require ("fs")



//1. Create a file 
fs.writeFile("notes.txt", "FS Module Started ", (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("File Created Successfully");
});



// read the file content
fs.readFile("notes.txt", "utf8", (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("Read data : ", data);
});



// append file content of the file
fs.appendFile("notes.txt", " This data will append in the last", (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("File appended successfully");
});



// delete the file

fs.rmSync("notes.txt", (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("File deleted successfully");
});

