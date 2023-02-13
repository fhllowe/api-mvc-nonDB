const brewcalculator = require('../model/Brewcalculator')

module.exports = {
          getBrews: async (req, res) => {
                    try {
                    const brewItems = await  brewcalculator.find().limit(5).sort({brewDate: -1})
                    res.render('brewcalculator.ejs', {
                              brewcalculator: brewItems
                    })
                    }catch(err){
                              console.log(err)
                    }
          },
          createBrew: async (req, res) => {
                    try {
                         await brewcalculator.create({
                         brewDate: req.body.brewDate,
                         coffeeName: req.body.coffeeName,
                         brewMethod: req.body.brewMethod,
                         grinder: req.body.grinder,
                         groundWeight: req.body.groundWeight,
                         ratio: req.body.ratio
                              })
                              console.log('Coffee has been added')
                              res.redirect('/brewcalculator')
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