const pool = require('../../dbConfig')
const bcrypt = require('bcrypt')
const jwtGenerator = require('../utils/tokenGenerator')

class AuthController {
    
    static async registerUser(req, res) {
        const {email, password} = req.body
        try {
            const user = await pool.query('SELECT * FROM public.user WHERE public.user.email = $1', [email]).then(res => res.rows)
            
            if (user.length !== 0) {
                return res.status(409).json("User already exists.")
            }

            const hashedPassword = await bcrypt.hash(password, 10)

            const newUser = await pool.query('INSERT INTO public.user (email, password) VALUES ($1, $2) RETURNING *', [
                email, 
                hashedPassword]).then(res => res.rows)

            const token = jwtGenerator(newUser[0].id)
            return res.json({token})

        } catch (error) {
            console.log(error)
            return res.status(500).json('User not added or token not created')
        }
    }

    static async loginUser (req, res) {
        const {email, password} = req.body
        console.log(email, password)
        try {
            const user = await pool.query('SELECT * FROM public.user WHERE public.user.email = $1', [email]).then(res => res.rows)

            if (user.length === 0) {
                return res.status(401).json('Invalid email or password')
            }

            const validPassword = await bcrypt.compare(password, user[0].password)
            
            if (!validPassword) {
                return res.status(401).json('Invalid email or password')
            }

            const token = jwtGenerator(user[0].id)

            return res.status(200).json({token})

        } catch (error) {
            console.log(error)
            return res.status(500).json('Server error')
        }
    }

    static async isVerified (req, res) {
        try {
            return res.status(200).json(true)
        } catch (error) {
            console.log(error)
            return res.status(500).json('Server error')
        }
    }
}


module.exports = AuthController