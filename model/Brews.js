const mongoose = require('mongoose')
const {Schema, model} = mongoose

const BrewSchema = new mongoose.Schema({
          coffeeName: {type: String,
                    required: true},
          origin:  {type: String,
                    required: true},
          process:  {type: String,
                    required: true},
          roaster:  {type: String,
                    required: true},
          roastLevel:  {type: String,
                    required: true},
          tasteNotes:  {type: String,
                    required: true}
})

module.exports = mongoose.model('Brews', BrewSchema)