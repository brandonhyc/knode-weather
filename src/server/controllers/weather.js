const express = require('express');
const geocode = require('../utils/geocode');
const forecast = require('../utils/forecast');
const os = require('os');
const path = require('path');

const router = express.Router();

router.get('/api/weather', async (req, res) => {

    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address!'
        })
    }

    let [ latitude, longitude, location, ] = await geocode(req.query.address);
    let forecastData = await forecast(latitude, longitude);

    res.send({
        forecast: forecastData,
        location,
        address: req.query.address,
    });
    
})

module.exports = router;