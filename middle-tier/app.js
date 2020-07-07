const express = require('express');
const path = require('path');
const app = express();
const mongo = require('mongodb');
const passport = require('passport');
const port =  process.env.PORT || 9090;
require('dotenv').config();
const authentication = require('./api/authentication-api');
const data = require('./api/data-api');



mongo.connect(process.env.MONGOURI, {useNewUrlParser: true}, (err, db) => {
    if(err) {
       console.log(err);
       process.exit(0);
    }
    console.log('database connected!');

    // let data = [
    //     {
    //         name: 'lewis',
    //         id: 12345,
    //         password: 'password',
    //         salary: 2800,
    //         fifty: 500,
    //         thirty: 300,
    //         twenty: 200
    //     }
    // ];

    // let dbo = db.db('fivethreetwogo');
    // let collection = dbo.collection('users');
    // collection.insertMany(data, (err, result) => {
    //     if(err) {
    //         console.log(err);
    //         process.exit(0);
    //     }
    //     console.log(result);
    //     db.close();
    // });

    db.close();

});

app.use('/api/authentication', authentication);
app.use('/api/data/', data); 
app.use(express.static(__dirname + '/dist'));

app.get('*/', (req, res) => { 
    const indexFile = path.join(__dirname, '../client/dist/index.html');
    res.sendFile(indexFile);
})

app.listen(port, () => {
    console.log(`Server running on ${port}`)
})