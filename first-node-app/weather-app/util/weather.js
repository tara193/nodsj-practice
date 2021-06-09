const request = require('request')

const weather = (latitue,longitude, callback) => {
    const apiKey = '099fca4fec9814c8e42554d9e39a1644'
    const url='https://api.openweathermap.org/data/2.5/weather?lat='+ latitue +'&lon='+ longitude +'&appid='+apiKey+'&unit=metrics'
    request({url, json:true},(error,{body})=>{
        if (error) {
            callback('unable to connect!',undefined)
        } else if (body.message) {
            callback('unable to find the location ', undefined)
        } else {
            callback(undefined, 
                'It is currently ' + body.main.temp + ' weather/clouds ' + body.weather[0].description)
        }
    })    
}

module.exports = weather