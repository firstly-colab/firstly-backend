const express = require('express')
const router = express.Router()
const LikedQuesController = require('../controllers/likedQuesController')

router.get('/liked-question/:user_id', LikedQuesController.getLiked)
router.post('/liked-question', LikedQuesController.sendLiked)
router.delete('/liked-question/:user_id/:question_id', LikedQuesController.sendDisliked)


module.exports = router