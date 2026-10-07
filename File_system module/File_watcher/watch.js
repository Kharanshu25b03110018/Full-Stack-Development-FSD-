import fs from "fs";
const fs = require('fs')

fs.watch("notes.txt" , (eventType , filename)=>{
console.log("Filename",filename)
console.log("Event",eventType)
})
