const request = require('request');

const forecast = (longitude, latitude, callback) => {
    const  url = `http://api.weatherstack.com/current?access_key=73a9c446173fb723a150cd83eda8a341&query=${latitude},${longitude}`;
    console.log(url);
    request( { url, json: true},(error, { body }) => {
        if(error){
            callback('Unable to connect the weather info service', undefined)
        }else if(body.length === 0){
            callback('Unable to find the weather info service', undefined)
        }else {
            // return 'Clear throughout the day. It is currently ${body.current.temperature === undefined? 20 : body.current.temperature}degrees out. It feels likes ${body.current.feelslike === undefined? 20: body.current.feelslike} degrees out.'
            // callback(undefined,{
            //     temperature: `Clear throughout the day. It is currently ${body.current.temperature}
            //     degrees out. It feels likes ${body.current.feelslike} degrees out.`
            // })
            callback(undefined,{
                temperature: `Clear throughout the day. It is currently 20
                degrees out. It feels likes 25 degrees out.`
            })
        }
    })
};


module.exports = forecast;
