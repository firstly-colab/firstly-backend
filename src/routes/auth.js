const express = require('express')
const router = express.Router()
const AuthController = require('../controllers/authController')
const authorization = require('../middleware/authorization')

router.post('/register', AuthController.registerUser);
router.post('/login', AuthController.loginUser);
router.get('/verified', authorization, AuthController.isVerified)

module.exports = router