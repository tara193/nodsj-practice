const path = require('path')
const express = require('express')

const app = express()
//console.log(__dirname)
const publicDirectoryPath = path.join(__dirname,'../public')
app.use(express.static(publicDirectoryPath))


app.get('/weather',(req,res)=>{
    res.send({
        forecast:'clear sky',
        location:'Pune'
    })
})


app.listen(3000,()=>{
    console.log('server started at 3000 port')
})