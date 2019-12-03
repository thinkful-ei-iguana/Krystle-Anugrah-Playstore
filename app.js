/* eslint-disable indent */
const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('common'));

const playstore = require('./playstore-data.js');


console.log('app is running');



app.get('/apps', (req, res) => {
    const { search } = req.query;
    
    let list = [];
    for (i = 0; i < playstore.length; i++) {
        let application = playstore[i];
        list.push(application.App);
    }

    list.join(` `);

    res.send(`${list}`);


});



app.listen(8000, () => {
    console.log('Server is listening on port 8000!!');
});