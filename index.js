require('dotenv').config();
const express = require('express')
const cors = require('cors')
const pool = require('./dbConfig')
const AuthRouter = require('./src/routes/auth')

const PORT = process.env.PORT

const app = express()

app.use(express.json())
app.use(cors())


app.get('/', (req, res) => {
    res.status(200).json("hello")
})

app.use(AuthRouter)


app.get('/result', async (req, res) =>   {
    const resp = await pool.query('SELECT * FROM public.user JOIN public.feedback ON public.user.id = feedback.user_id JOIN public.response ON feedback.response_id = response.id WHERE (response.category = $1 OR response.category = $2 OR response.category = $3) AND feedback.desired = $4', ['pet', 'travel', 'food', true]).then(result => result.rows)
    res.status(200).json(resp)
})

app.listen(PORT, () => {
    console.log("Listening to ", PORT)
})