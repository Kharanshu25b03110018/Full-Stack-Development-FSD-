import express from 'express'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const bookData = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'data', 'books.json'), 'utf8')
)

app.get('/api/v1/books', (req, res) => {
    try {
        res.status(200).json({
            status: 'success',
            data: {
                books: bookData
            }
        })
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: 'data not found'
        })
    }
})

app.get('/api/v1/books/:id', (req, res) => {
    try{
    console.log(req.params.id);
    const book = bookData.find((book) => book.id === req.params.id);
    // console.log(book);
    res.json({book:book});
    }catch(error){
        res.status(500).json({
        status: "fail",
        message: "internal server error"
    })
    }

    // using linear search
    // if (!book) {
    //     return res.status(404).json({
    //         status: 'fail',
    //         message: 'Book not found'
    //     })
    // }

    // res.status(200).json({
    //     status: 'success',
    //     data: {
    //         book
    //     }
    // })
})

app.post('/api/v1/books/', (req, res) => {
    res.send ("Post  request received ");

});

app.listen(8000, () => {
    console.log('server is running...')
})