
// main.js

const deleteBtn = document.querySelectorAll('.delete')


Array.from(deleteBtn).forEach((data)=>{
    data.addEventListener('click', deleteBrew)
})

async function deleteBrew(){
    const brewId = this.parentNode.dataset.id
    try{
        const response = await fetch('brewcalculator/deleteBrew', {
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                brewIdFromJS: brewId
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

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