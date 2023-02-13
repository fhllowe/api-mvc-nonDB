const express = require('express')
const router = express.Router()
const brewController = require('../controllers/brews')

router.get('/', brewController.getBrews)

router.post('/createBrew', brewController.createBrew)

//router.get('/calculateBrew', brew.calculateBrew)

router.delete('/deleteBrew', brewController.deleteBrew)

//router.put('/markComplete', brew.markComplete)

//router.put('/markIncomplete', brew.markIncomplete)

module.exports = router