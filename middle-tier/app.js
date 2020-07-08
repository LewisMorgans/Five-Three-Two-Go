const express = require('express');
const path = require('path');
const app = express();
const mongo = require('mongodb');
const passport = require('passport');
const port =  process.env.PORT || 9090;
require('dotenv').config();
const bodyParser = require('body-parser');
const authentication = require('./api/authentication-api');
const data = require('./api/data-api');

// Body-Parser middleware
app.use(bodyParser.urlencoded({limit: '50mb'}));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/authentication', authentication);
app.use('/api/data/', data); 
app.use(express.static(path.join(__dirname, '../client/dist')))
app.get('*/', (req, res) => { 
    const indexFile = path.join(__dirname, '../client/dist/index.html');
    res.sendFile(indexFile);
})

app.listen(port, () => {
    console.log(`Server running on ${port}`)
})