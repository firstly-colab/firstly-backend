require('dotenv').config();
const express = require('express')
const pool = require('./dbConfig')

const app = express()
const PORT = process.env.PORT

app.get('/', (req, res) => {
    res.status(200).json('hello')
})

app.listen(PORT, () => {
    console.log("Listening to ", PORT)
})