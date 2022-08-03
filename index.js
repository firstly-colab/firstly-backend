require('dotenv').config();
const express = require('express')
const pool = require('./dbConfig')

const app = express()
const PORT = process.env.PORT

app.get('/', (req, res) => {
    res.status(200).json("hello")
})
app.get('/result', async (req, res) =>   {
    const resp = await pool.query('SELECT * FROM public.users JOIN public.feedback ON users.id = feedback.user_id JOIN public.response ON feedback.response_id = response.id WHERE (response.category = $1 OR response.category = $2 OR response.category = $3) AND feedback.desired = $4', ['pet', 'travel', 'food', true]).then(result => result.rows)
    res.status(200).json(resp)
})

app.listen(PORT, () => {
    console.log("Listening to ", PORT)
})