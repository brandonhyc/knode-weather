const express = require('express');
const app = express();

const weatherRoutes = require('./controllers/weather');

app.use(express.static('dist'));
app.use(weatherRoutes);

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
