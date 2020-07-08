const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const mongo = require('mongodb');
const jwt = require('jsonwebtoken');
const ObjectId = require('mongodb').ObjectID

mongo.connect(process.env.MONGOURI, { useNewUrlParser: true }, (err, db) => {
  if (err) {
    console.log(err);
    process.exit(0);
  }
  console.log('database connected!');
  var dbo = db.db('fivethreetwogo');;
  var collection = dbo.collection('users');

  router.post('/register', (req, res) => {

    const newUser = ({ // add new users to database
      name: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });


    collection.findOne({ email: req.body.email })
      .then(user => {
        if (user) {
          res.sendStatus(404);
        } else {
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err) throw err;
              newUser.password = hash;
              collection.insertOne(newUser)
            })
          });
          res.sendStatus(200);
        }
      })
  });

  router.post("/login", (req, res) => {

    collection.find({ email: req.body.emailAddress })
      .toArray()
      .then((user => {
        if (!user.length) {
          res.sendStatus(404);
        }
        bcrypt.compare(req.body.password, user[0].password, (err, isMatch) => {
          if (err) throw new Error(err)
          if (isMatch) {
            const token = jwt.sign({ userId: user[0]._id }, process.env.secret, { expiresIn: '24h' });
            res.json({ status: 200, token: token, user: { email: user[0].email } })
          } else {
            res.sendStatus(404)
          }
        })
      }));
  });

  router.post("/loggedIn", (req, res) => {
    let token = req.body.token
    console.log(token)
    collection.find({"_id": ObjectId(token)})
    .toArray()
    .then(user => {
      if(!user.length) {
        res.send(false)
      } else {
        res.send(true)
      }
      console.log(user)
    });
  });

  



});

module.exports = router;