const express = require('express')
const router = express.Router()
const controller = require('./controller');

router.get('/', controller.index)
router.get('/show', controller.show)
router.get('/try-catch', controller.tryCatch)
router.get('/nothing', controller.nothing)
router.get('/try-catch-log-e', controller.tryCatchLogE)
router.get('/res-send', controller.resSend)
router.get('/try-catch-send', controller.tryCatchSend)
router.get('/search', controller.search)

module.exports = router