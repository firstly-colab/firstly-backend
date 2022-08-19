const express = require('express')
const router = express.Router()
const ResultController = require('../controllers/resultController')

router.POST('/result', ResultController.getResult)

module.exports = router;