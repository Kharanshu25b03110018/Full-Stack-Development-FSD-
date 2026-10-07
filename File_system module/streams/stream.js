import fs from 'fs'
 const readstream = fs.createReadStream("intro.txt", {encoding:"utf8", highWaterMark: 1});

// readstream.on("data", (chunk) => {
//     console.log("Data Received");
//     console.log("Data", chunk);
// })

const writeStream = fs.createWriteStream("output.txt", {encoding:"utf8"});
// writeStream.write("This is the first line of the file\n");
readstream.pipe(writeStream);