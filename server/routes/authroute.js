const router = require('express').Router();
const { MongoClient } = require('mongodb');
const passport = require('passport');

const CLIENT_END_POINT = 'http://localhost:1234';
// sign up post
function routes() {
  router.post('/signup', (req, res) => {
    const {
      firstname, Secondname, Address, email, password
    } = req.body;
    
    const url = 'mongodb://127.0.0.1:27017';

    (async function addNewUser() {
      let client;
      try {
        client = await MongoClient.connect(url, { useUnifiedTopology: true });

        const db = client.db('admin');
        const user = {
          firstname, Secondname, Address, email, password
        };
        const coll = db.collection('users');
        const result = await coll.insertOne(user);
        // we login in the user if success full
        req.login(result.ops[0], () => {
          res.send('you  are now logged in ');
        });
      } catch (err) {
        throw (err);
      }
    }());
  });
  router.post('/login/userID', (passport.authenticate('local', {
    successRedirect: CLIENT_END_POINT,
    failureRedirect: ''
  })));

  router.get('/logout', (req, res) => {
    res.json({
    });
  });

  router.post('/editProfile', (req, res) => {
    // allow edit of the user profile
    res.json(req.body);
  });

  return router;
}

module.exports = routes();
