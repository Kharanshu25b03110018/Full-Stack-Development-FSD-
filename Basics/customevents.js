import { EventEmitter } from "node:events";

class Fileholder extends EventEmitter {
    uploadFile(filename) {
        console.log("Fileholder");
        this.emit("FileCreated", filename);
    }
}

const uploader = new Fileholder();
uploader.on("FileCreated", (filename) => {
    console.log(`FileCreated event called -> File Created: ${filename}`);
});

uploader.uploadFile("example.txt");