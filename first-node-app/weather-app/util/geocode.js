const request = require('request')

const geocode = (address, callback) => {
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?limit=1&access_token=pk.eyJ1IjoidGFyYWt1bWFyaSIsImEiOiJjazZjbDV5MWgwM2V1M25td2hoa3Yyd2tjIn0.2iUeAJTDHCuvqLevR0EgVg'
    request({url,json:true},(error, {body})=>{
        if(error){
            callback('unable to connect', undefined)
        } else if(body.features.length === 0){
            callback('unable to find the location', undefined)
        }else{    
            callback(undefined, 
                {
                    latitude:body.features[0].center[1],
                    longitude:body.features[0].center[0],
                    location:body.features[0].place_name
            })
        }
    })
}
module.exports =geocode 