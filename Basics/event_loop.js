 import fs from "fs";
 import process from "process";

// setTimeout(() => {
//     console.log("setTimeout");
// })
fs.readFile("intro.txt", "utf-8", (err, data) => {
setTimeout(() => {
    console.log("setTimeout inside readFile");
}, 0);

setImmediate(() => {
    console.log("setImmediate inside readFile");
});

setInterval(() => {
    console.log("setInterval inside readFile");
}, 10000);

    console.log("File Read");
})



process.nextTick(() => {
    console.log("NextTick");
});

// setInterval(() => {
//     console.log("setInterval");
// }, 1000);

// setImmediate(() => {
//     console.log("setImmediate");
// })
