import fs from 'fs'

fs.symlink("notes.txt", "Link.txt", (err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("Symbolic Link Successfull")
})
