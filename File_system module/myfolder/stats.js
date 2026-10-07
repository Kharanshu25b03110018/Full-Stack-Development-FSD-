import fs from 'fs'

fs.stat("notes.txt", (err,stats)=>{
if (err) {
    console.log(err)
    return ;
}
// console.log("information of[notes.txt]",stats);


// console.log("information of[notes.txt]",stats.size);


// console.log("information of[notes.txt]",stats.birthtime.toISOString());
// console.log("information of[notes.txt]",stats.atime.toISOString());
// console.log("information of[notes.txt]",stats.mtime.toISOString());
// console.log("information of[notes.txt]",stats.ctime.toISOString());


// console.log("information of[notes.txt]",stats.birthtime.toISOString().split("T"));
// console.log("information of[notes.txt]",stats.atime.toISOString().split("T"));
// console.log("information of[notes.txt]",stats.mtime.toISOString().split("T"));
// console.log("information of[notes.txt]",stats.ctime.toISOString().split("T"));

// console.log("information of[notes.txt]",stats.birthtime.toISOString().split("T")[0]);
// console.log("information of[notes.txt]",stats.atime.toISOString().split("T")[0]);
// console.log("information of[notes.txt]",stats.mtime.toISOString().split("T")[0]);
// console.log("information of[notes.txt]",stats.ctime.toISOString().split("T")[0]);

// console.log("information of[notes.txt]",stats.birthtime.toISOString().split("T")[1]);
// console.log("information of[notes.txt]",stats.atime.toISOString().split("T")[1]);
// console.log("information of[notes.txt]",stats.mtime.toISOString().split("T")[1]);
// console.log("information of[notes.txt]",stats.ctime.toISOString().split("T")[1]);


// console.log("information of[notes.txt]",stats.isFile());
// console.log("information of[notes.txt]",stats.isDirectory());




// function CheckFile(filename) 
// {
// const maxSize = 2*1024*1024; // 2MB

// if (filename.size > maxSize) 
// {
//     console.log("File size exceeds the maximum limit of 2MB");
//     return false; 
// }
// else 
// {
//     console.log("File Submitted Successfully")
// }

// }

// CheckFile("ContentArchitecture.txt")





// const sizeChecker = (filename) =>{
// const maxSize = 2*1024*1024; // 2MB

// if (filename.size > maxSize) 
// {
//     console.log("File size exceeds the maximum limit of 2MB");
//     return false; 
// }
// else 
// {
//     console.log("File Submitted Successfully")
// }
// }

// sizeChecker("ContentArchitecture.txt")



// IIFE
(
    ()=>{
        console.log("Hello")
    }
)()



// High order Function 
const num = [1,2,3,4,5]
num.map((num, index)=>{
    console.log(`Number ${index+1}: ${num*2}`)
});





});