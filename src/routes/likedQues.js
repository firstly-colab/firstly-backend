const express = require('express')
const router = express.Router()
const LikedQuesController = require('../controllers/likedQuesController')

router.get('/liked-question', LikedQuesController.getLiked)
router.post('/liked-question', LikedQuesController.sendLiked)


module.exports = router