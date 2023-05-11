const express = require('express');
const router  = express.Router();
const db = require('../db/queries/users');


//login routes
router.get('/login', (req, res) => {
  const userID = req.cookies.user_id;

  if (userID) {
    //user logged in
    res.redirect('/');
  } else {
    res.render('login');
  }
});

router.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  if ((!email) || (!password)) {
    //no name and/or email and/or password provided
    return res.status(400).send(`<p>Please enter an email and password!</p><button onclick="history.back()">Go Back</button>`);
  }

  db.getUser(email)
    .then(user => {
      console.log("returned user", user);
      if (user) {
        res.cookie('user_id', user.id);
        res.cookie('name', user.name);
        res.redirect('/quizzes/home');
      } else {
        console.log("user doesn't exist");
        // res.redirect('/users/login');
        return res.status(400).send(`<p>User does not exist!</p><button onclick="history.back()">Go Back</button>`);
      }
    })
    .catch(e => res.send(e));

  //haven't checked password
});