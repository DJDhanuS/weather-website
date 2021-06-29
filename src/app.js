const path = require('path');
const express = require('express');
const hbs = require('hbs');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const app = express();
const port = process.env.PORT || 3000 ;

//Define paths for Express config
const publicDirectory = path.join(__dirname,'../public');
const viewsDirectory = path.join(__dirname,'../templates/views');
const partialsPath = path.join(__dirname,'../templates/partials');


// Setup handlebars engine and views
app.set('view engine', 'hbs');
app.set('views', viewsDirectory);
hbs.registerPartials(partialsPath);

//Setup static directory to serve
app.use(express.static(publicDirectory));

app.get('', (req, res) => {
   res.render('index', {
       title: 'Weather app',
       name: 'Punith'
   });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        name: 'Dhananjaya'
    })
});

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help text',
        name: 'Parisha'
    })
});

app.get('/weather', (req, res) => {

    if (!req.query.address) {
        return res.send({
            error: 'Please provide the a address term'
        })
    }
    geocode( req.query.address, (error, {latitude, longitude, location } = {}) => {
        if (error) {
            return res.send({
                error: 'Please provide the a address term'
            })
        }
        forecast(longitude, latitude,(error, forecastData) => {
            if (error) {
                return res.send({
                    error: 'Please provide the a latitude and longitude term'
                })
            }
            res.send({
                location,
                forecastData: forecastData,
                address: req.query.address
            })
        });
    })
});


app.get('/products', (req, res) => {
    console.log(req.query);
    if(!req.query.search){
      return res.send({
            error: 'You must provide a search term'
        })
    }

    res.send({products:[]})
});


app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        errorMsg:'help article not found'
    })
});

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        errorMsg:'MY 400 page!!'
    })
});




app.listen(port,() => {
    console.log('Server is on up on port:' + port)
});
