const express = require('express');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');
const os = require('os');
const path = require('path');

module.exports = {
    create: (app) => {
    app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));
    app.get('/api/weather', async (req, res) => {

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

    // app.get('*', (req, res) => {
    //     res.render('404', {
    //         title: '404',
    //         name: 'Andrew Mead',
    //         errorMessage: 'Page not found.'
    //     })
    // })
}}
