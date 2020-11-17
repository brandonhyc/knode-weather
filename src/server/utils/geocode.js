const { default: Axios } = require('axios');
const constants = require('../constants');

const geocode = async (address) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + `.json?access_token=${constants.GEO_APIKEY}`;

    try {

        return Axios(
            {
                method: 'GET',
                url,
                responseType: 'json',
            }
        )
            .then(res => res.data)
            .then(body => ([
                body.features[0].center[1],
                body.features[0].center[0],
                body.features[0].place_name,
            ]));
    } catch (error) {
        console.error(error);
    }
};

module.exports = geocode;