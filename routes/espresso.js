const express = require('express')
const router = express.Router()
const espressoController = require('../controllers/espresso')

router.get('/', espressoController.getEspresso)

router.post('/createEspresso', espressoController.createEspresso)

//router.get('/calculateBrew', brew.calculateBrew)

router.delete('/deleteEspresso', espressoController.deleteEspresso)

//router.put('/calculateEbr', espressoController.calculateEbr)

//router.put('/markComplete', brew.markComplete)

//router.put('/markIncomplete', brew.markIncomplete)

module.exports = router