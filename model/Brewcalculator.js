const mongoose = require('mongoose')
const {Schema, model} = mongoose

const BrewSchema = new mongoose.Schema({
          brewDate: {type: Date,
                    required: true
          },
          coffeeName: {type: String,
                    required: true},
          groundWeight: {type: Number,
                    required: true
          },
          ratio: {type: Number,
                    required: true},
          grinder: {type: String,
                    required: false},
          brewMethod: {type: String,
                    required: true},
          waterWeight: {type: Number,
                    default: function (){return this.groundWeight * this.ratio}
                    },
          bloom: {type: Number,
                    default: function(){
                    return this.groundWeight* 2
          }},
          grindSize: {type: String,
                    default: function (){
                    if (this.waterWeight >= 260 ) {
                              return 'medium coarse'
                    }
                    else {
                              return 'medium'
                    }
          }},
          recipe: {type: String,
                    default: function(){
                    return `Start with ${this.groundWeight}g ground to ${this.grindSize}, heat up water to 93C, pour ${this.bloom}g of water into the grounds to bloom the coffee, wait for 30 seconds, and pour to ${this.waterWeight}g`
          }}
})

module.exports = mongoose.model('BrewCalc', BrewSchema)