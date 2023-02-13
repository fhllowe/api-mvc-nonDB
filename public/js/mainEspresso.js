
// main.js

//const { calculateEbr } = require("../../controllers/espresso")

const deleteBtn = document.querySelectorAll('.delete')

const calcBtn = document.querySelectorAll('.calculate')


Array.from(deleteBtn).forEach((data)=>{
    data.addEventListener('click', deleteEspresso)})

Array.from(calcBtn).forEach((data) => {
    data.addEventListener('click', calculateEbr)})

async function deleteEspresso(){
    const espressoId = this.parentNode.dataset.id
    try{
        const response = await fetch('espresso/deleteEspresso', {
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                espIdFromJS: espressoId
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

/* async function calculateEbr () {
    const espressoId = this.parentNode.dataset.id
    const cofIn = this.parentNode.dataset.coffeeIn
    const cofOut = this.parentNode.dataset.coffeeOut
    try{
        const response = await fetch('espresso/calculateEbr', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                espIdFromJS: espressoId,
                'coffeeIn': cofIn,
                'coffeeOut': cofOut
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }

} */

//async function markComplete(){
//    const brewId = this.parentNode.dataset.id
//    try{
//        const response = await fetch('brew/markComplete', {
//            method: 'put',
//            headers: {'Content-type': 'application/json'},
//            body: JSON.stringify({
//                brewIdFromJS: brewId
//            })
//        })
//        const data = await response.json()
//        console.log(data)
//        location.reload()
//    }catch(err){
//        console.log(err)
//    }
//}

//async function markIncomplete(){
//    const brewId = this.parentNode.dataset.id
//    try{
//        const response = await fetch('brew/markIncomplete', {
//            method: 'put',
//            headers: {'Content-type': 'application/json'},
//            body: JSON.stringify({
//                brewIdFromJS: brewId
//            })
//        })
//        const data = await response.json()
//        console.log(data)
//        location.reload()
//    }catch(err){
//        console.log(err)
//    }
//}