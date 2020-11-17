const express = require('express');
const controllers = require('./controllers');

const app = express();

app.use(express.static('dist'));
controllers.create(app);

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
