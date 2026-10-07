import fs from 'fs'

fs.watchFile("notes.txt",(prev,curr)=>{
    console.log("previous", prev)
    console.log("current", curr)
});
setTimeout(()=>{
    watcher.unwatchFile()
    console.log("File watching ")
})
