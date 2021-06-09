const https = require('https')

const url='https://api.mapbox.com/geocoding/v5/mapbox.places/Pune.json?limit=1&access_token=pk.eyJ1IjoidGFyYWt1bWFyaSIsImEiOiJjazZjbDV5MWgwM2V1M25td2hoa3Yyd2tjIn0.2iUeAJTDHCuvqLevR0EgVg'
const request = https.request(url, (response)=>{
    let data=''
    response.on('data', (chunk) =>{
        data = data + chunk.toString()
    })
    response.on('end', ()=>{
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', (error)=>{
    console.log('An error', error)
})

request.end()