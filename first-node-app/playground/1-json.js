const fs = require('fs')
const bufferData = fs.readFileSync('1-json.json')
const userJSON = bufferData.toString()
const parseData =  JSON.parse(userJSON)
parseData.name = 'Tara'
parseData.age ='26'

console.log(parseData)

const dataJSON = JSON.stringify(parseData)
fs.writeFileSync('1-json.json', dataJSON)

// const book = {
//     title: 'Shiva',
//     author:'amit'
// }

// const dataJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', dataJSON)

// const bufferData = fs.readFileSync('1-json.json')
// const parseData = JSON.parse(bufferData)
// console.log(parseData)

// {"title":"Shiva","author":"amit"}
