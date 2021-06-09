const geocode = require('./util/geocode.js')
const weather = require('./util/weather.js')

const placeName = process.argv[2]
if(!placeName){
    console.log('Please enter valid place name')
}
else{
    geocode(placeName, (error, {latitude,longitude,location})=>{
        if(error){
            return console.log('Error',error)
        }
        weather(latitude,longitude ,(weatherError, weatherData) => {
            if(weatherError){
                return console.log('Error',weatherError )
            }
            console.log(location)
            console.log(weatherData)
          })
    })
}



