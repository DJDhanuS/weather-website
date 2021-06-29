const request = require('request');

const geocodes = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoiZGhhbmFuamF5YXMiLCJhIjoiY2txZTByeWg4MDM3bzJucXUzeDQ4MnV0byJ9.Y-kGuzvL-svxkCTkpIdnUg`;

    request({ url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect the location services', undefined)
        } else if(body.length === 0) {
            callback('Unable to find the location service!!', undefined)
        }else {

            callback(undefined, {
                longitude: body.features[0].center[0],
                latitude: body.features[0].center[1],
                location: body.features[0].place_name
            })
        }
    })
};

module.exports = geocodes;