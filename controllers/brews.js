const brewcalculator = require('../model/Brews')

module.exports = {
          getBrews: async (req, res) => {
                    try {
                    const brewItems = await  brewcalculator.find().limit(5)
                    res.render('brews.ejs', {
                              brewcalculator: brewItems
                    })
                    }catch(err){
                              console.log(err)
                    }
          },
          createBrew: async (req, res) => {
                    try {
                         await brewcalculator.create({
                         coffeeName: req.body.coffeeName,
                         origin: req.body.origin,
                         process: req.body.process,
                         roaster: req.body.roaster,
                         roastLevel: req.body.roastLevel,
                         tasteNotes: req.body.tasteNotes
                              })
                              console.log('Coffee has been added')
                              res.redirect('/brews')
                    }catch(err){
                              console.log(err)
                    }
          },
          deleteBrew: async (req, res) => {
                    console.log(req.body.brewIdFromJS)
                    try{
                              await brewcalculator.findOneAndDelete({_id: req.body.brewIdFromJS})
                              console.log('Deleted Coffee')
                              res.json('Deleted Coffee')
                    }catch(err){
                              console.log(err)
                    }
          }
}