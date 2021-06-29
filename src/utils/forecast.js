const request = require('request');

const forecast = (longitude, latitude, callback) => {
    const  url = `http://api.weatherstack.com/current?access_key=ddd3e79e1bec7c4ea13ff55317fc081b&query=${latitude},${longitude}`;
    request( { url, json: true},(error, { body }) => {
        if(error){
            debugger;
            callback('Unable to connect the weather info service', undefined)
        }else if(body.length === 0){
            callback('Unable to find the weather info service', undefined)
        }else {
            console.log(body);
            callback(undefined,{
                temperature: `Clear throughout the day. It is currently ${body.current.temperature}
                degrees out. It feels likes ${body.current.feelslike} degrees out. Weather type ${body.current.weather_descriptions[0]} and wind speed is ${body.current.wind_speed}`
            })
        }
    })
};


module.exports = forecast;
