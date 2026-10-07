import fs from 'fs/promises'

async function readFileContent(Filename) {
    const data = await fs.readFile(Filename, 'utf8')
    console.log(data)

}
readFileContent("notes.txt")

// create a file

async function createFile(Filename, content) {
    await fs.writeFile(Filename, content)
    console.log("File Created Successfully")
}
//Write a file

createFile("notes.txt", "Hello Node js")