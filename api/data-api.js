var express = require('express');
var router = express.Router();
const mongo = require('mongodb');
const ObjectId = require('mongodb').ObjectID

mongo.connect(process.env.MONGOURI, { useNewUrlParser: true }, (err, db) => {
    if (err) {
        console.log(err);
        process.exit(0);
    }
    console.log('database connected!');
    var dbo = db.db('fivethreetwogo');;
    var collection = dbo.collection('users');


    router.post("/getFinances", (req, res) => {
        let user_id = req.body.userId
        collection.find({ "_id": ObjectId(user_id) })
            .toArray()
            .then(user => {
                console.log('USER', user)
                if (user.length  < 0) {
                    res.sendStatus(404)
                } else {
                    res.json({
                        
                        salary: user[0].salary,
                        fifty: user[0].fifty,
                        thirty: user[0].thirty,
                        twenty: user[0].twenty
                    })
                }
            })
    });

    router.post("/setFinances", (req, res) => {
        console.log(req.body)
        let user_id = req.body.userId

        collection.updateOne({ "_id": ObjectId(user_id) }, {
            '$set': {
                'salary': req.body.actualSpend.salary,
                'fifty': req.body.actualSpend.fifty,
                'thirty': req.body.actualSpend.thirty,
                'twenty': req.body.actualSpend.twenty,
            }
        }).then(resp => {
            res.json({
                code: 200,
                message: 'Information updated'
            })
        })
    })

});

module.exports = router;


