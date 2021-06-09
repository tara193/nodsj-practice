// setTimeout(()=>{
//     console.log('times up')
// }, 2000)

// const names = ['aaaaaa','bbbb','c','ddd']
// const shortName = names.filter((name)=>{
//     name.length < 4
// })

// const geoCode = (address, callback) =>{
//     setTimeout(()=>{
//         const data={
//             lalitude:0,
//             longitude:0
//         }
//         callback(data)
//     },2000)
// }

// geoCode('center',(coordinates)=>{
//     console.log(coordinates)
// })
const add = (a,b, callback) =>{
    setTimeout(()=>{
        callback(a+b)
    },2000)
}


add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})
