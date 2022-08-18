const express = require('express')
const router = express.Router()
const ResultController = require('../controllers/resultController')

router.get('/result', ResultController.getResult)

module.exports = router;