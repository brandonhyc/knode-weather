const axios = require('axios');

const forecast = async (latitude, longitude) => {
    const url = `https://api.weather.gov/points/${latitude},${longitude}`;

    try {
        let specifiedLocationUrl = await axios({
                method: 'get',
                url,
                headers: { 'User-Agent': '(myweatherapp.com, brandon.heyc@gmail.com)' },
            })
            .then((body) => body.data.properties.forecast);

        return axios({
                medthod: 'get',
                url: specifiedLocationUrl,
                responseType: 'json',
                headers: { 'User-Agent': '(myweatherapp.com, brandon.heyc@gmail.com)' },
        })
        .then((res => res.data))
        .then(data => data.properties.periods);

    } catch (error) {
        console.error(error);
    }
}

module.exports = forecast;