const Espresso = require('../model/Espresso')

module.exports = {
          getEspresso: async (req, res) => {
                    try {
                    const espressoItems = await  Espresso.find().limit(5).sort({brewDate: -1})
                    res.render('espresso.ejs', {
                              espressoLog: espressoItems
                    })
                    }catch(err){
                              console.log(err)
                    }
          },
          createEspresso: async (req, res) => {
                    try {
                         await Espresso.create({
                         brewDate: req.body.brewDate,
                         coffeeName: req.body.coffeeName,
                         coffeeIn: req.body.coffeeIn,
                         coffeeOut: req.body.coffeeOut,
                         grindSize: req.body.grindSize,
                         preinfusionTime: req.body.preinfusionTime,
                         extractTime: req.body.extractTime,
                              })
                             
                              console.log('Coffee has been added')
                              res.redirect('/espresso')
                    }catch(err){
                              console.log(err)
                    }
          },
          deleteEspresso: async (req, res) => {
                    console.log(req.body.espIdFromJS)
                    try{
                              await Espresso.findOneAndDelete({_id: req.body.espIdFromJS})
                              console.log('Deleted Coffee')
                              res.json('Deleted Coffee')
                    }catch(err){
                              console.log(err)
                    }
          },
/*           calculateEbr: async (req, res) => {
               try{ 
                    await Espresso.updateOne({_id: req.body.espIdFromJS}, 
                         {$set: {
                              ebr: (Number(req.body.coffeeIn / req.body.coffeeOut))
                         }})
                    console.log('EBR Available')
                    res.json('EBR Available')
               }catch(err){
                    console.log(err)
               }
          } */
}