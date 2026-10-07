import fs from "fs"

// create a directory
fs.mkdir("./myfolder1/myfolder2/myfolder3", { recursive: true }, (err) => {
    if (err) {
        console.error("Error creating directory:", err)
    } else {
        console.log("Directory created successfully")
    }
})


fs.writeFile("./myfolder/script.js", "hello js", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("File created successfully");
    }
})


fs.readdir("./myfolder/script.js", (err, files) => {
    if (err) {
        console.log(err); 
    } else {
        console.log("Files in directory:", files);
    }
});

// fs.rmdir("./myfolder1/myfolder2/myfolder3", (err) => {
//     if (err) {
//         console.error("Error removing directory:", err)
//     } else {
//         console.log("Directory removed successfully")
//     }
// })