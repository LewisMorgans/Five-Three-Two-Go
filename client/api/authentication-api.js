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
      salary: 0,
      fifty: 0,
      thirty: 0,
      twenty: 0
    });


    collection.findOne({ email: req.body.email })
      .then(user => {
        if (user) {
          res.json({ code: 250, message: 'User email already exists' });
        } else {
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err) throw err;
              newUser.password = hash;
              collection.insertOne(newUser)
            })
          });
          res.json({
            status: 200,
            message: 'success'
          });
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
            console.log(process.env.secret)
            const token = jwt.sign({ userId: user[0]._id }, process.env.secret, { expiresIn: '24h' });
            res.json({ status: 200, token: token, user: { email: user[0].email } })
          } else {
            res.json({
              code: 404,
              message: 'user not found'
            })
          }
        })
      }));
  });

  router.post("/loggedIn", (req, res) => {
    let token = req.body.token
    collection.find({ "_id": ObjectId(token) })
      .toArray()
      .then(user => {
        if (!user.length) {
          res.send(false)
        } else {
          res.send(true)
        }
      });
  });

  router.post("/getUser", (req, res) => {
    let user_id = req.body.userId
    collection.find({ "_id": ObjectId(user_id) })
      .toArray()
      .then(user => {
        if (!user.length) {
          res.sendStatus(404)
        } else {
          res.json(user)
        }
      })
  })

  router.post("/updateAccount", (req, res) => {

    let user_id = req.body.user.userId
    collection.updateOne({ "_id": ObjectId(user_id) }, {
      '$set': {
        'name': req.body.username,
        'email': req.body.email,
      }
    }).then(resp => {
      res.json({
        status: 200,
        message: "update made"
      })

    }).catch(err => console.log(error))
  })

  router.post("/updatePassword", (req, res) => {

    console.log(req.body)

    let userPassword = req.body.password;
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(userPassword, salt, (err, hash) => {
        if (err) throw err;
        let hashPassword = hash;
        console.log(hashPassword)

        let user_id = req.body.userId
        collection.updateOne({ "_id": ObjectId(user_id) }, {
          '$set': {
            'password': hashPassword
          }
        }).then(resp => {

          res.json({
            status: 200,
            message: "update made"
          });

        });

      });
    });
  });

  router.post("/deleteAccount", (req, res) => {
    console.log(req.body)
    let user_id = req.body.userId;
    collection.deleteOne({ "_id": ObjectId(user_id) })
      .then(_ => {
        res.json({
          status: 200,
          message: 'account deleted'
        })
      }).catch(err => console.log(err))
  });
});

module.exports = router;