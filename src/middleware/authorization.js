require('dotenv').config()
const jwt = require('jsonwebtoken')


module.exports = async (req, res, next) => {
    try {
        const token = req.header('token')

        if (!token) {
            return res.status(401).json('User not authorized')
        }

        const payload = await jwt.verify(token, process.env.JWT_SECRET)
        console.log(payload.user)
        req.user = payload.user

    } catch (error) {
        console.log(error)
        return res.status(401).json('User not authorized')
    }

    next();
}