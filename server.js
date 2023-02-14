const express = require('express')
const app = express()
const connectDB = require('./config/database')
const homeRoutes = require('./routes/home')
const brewRoutes = require('./routes/brews')
const espressoRoutes = require('./routes/espresso')
const brewCalcRoutes = require('./routes/brewcalculator')

require('dotenv').config({path: './config/.env'})

connectDB()
PORT = process.env.PORT || 3000


  //===========================
  // Middlewares
  //===========================
  app.set('view engine', 'ejs')
  app.use(express.static('public'))
  app.use(express.urlencoded({ extended: true }))
  app.use(express.json())
    

  app.use('/',homeRoutes)
  app.use('/brews', brewRoutes)
  app.use('/espresso', espressoRoutes)
  app.use('/brewcalculator', brewCalcRoutes )
    
  connectDB().then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on Port ${PORT}`)
      })
      
  })