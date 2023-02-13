const mongoose = require('mongoose')
const {Schema, model} = mongoose

const EspressoSchema = new mongoose.Schema({
          brewDate: {type: Date,
                    required: true},
          coffeeName: {type: String,
                    required: true},
          coffeeIn:  {type: Number,
                    required: true},
          coffeeOut:  {type: Number,
                    required: true},
          grindSize:  {type: String,
                    required: true},
          preinfusionTime: {type: String,
                              required: false},
          extractTime:  {type: String,
                             required: true},
          ebr:      {type: Number,
                    default: function(){
                              return this.coffeeIn / this.coffeeOut
                    },
                    required: false}
          })
module.exports = mongoose.model('Espresso', EspressoSchema)