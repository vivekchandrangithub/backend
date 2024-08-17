const express = require('express')
const { getAllBooks, getBookById, addBook, updateBook, deleteBook } = require('../controllers/bookControllers')
const router = express.Router()

    router.get('/',getAllBooks )
    router.get('/:bookId', getBookById )
    router.post('/:bookId',addBook)
    router.patch('/:bookId', updateBook )
    router.delete('/:bookId', deleteBook)

module.exports = router