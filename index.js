require('dotenv').config();
const express = require('express')
const cors = require('cors')
const pool = require('./dbConfig')
const AuthRouter = require('./src/routes/auth')
const ResultRouter = require('./src/routes/result')
const LikedQuesRouter = require('./src/routes/likedQues')

const PORT = process.env.PORT

const app = express()

app.use(express.json())
app.use(cors())


app.get('/', (req, res) => {
    res.status(200).json("hello")
})

app.use(AuthRouter)
app.use(ResultRouter)
app.use(LikedQuesRouter)

app.listen(PORT, () => {
    console.log("Listening to ", PORT)
})