const express = require('express');
const bodyParser = require("body-parser");
const router = require("express").Router();
const cors = require('cors');
const { promptGPT } = require("./helpers/promptGPT");
const app = express();
const axios = require('axios').default
const dotenv = require('dotenv')
const db = require('../db/connection');

dotenv.config()

app.use(cors());
app.use(express.json());

// Products API
app.get('/products', (req, res) => {
  db.query('SELECT * FROM products', (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).send(results.rows);
  })
});

// Login API
app.post('/login', (req, res) => {
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
        res.cookie('first_name', user.first_name);
      } else {
        console.log("user doesn't exist");
        // res.redirect('/users/login');
        return res.status(400).send(`<p>User does not exist!</p><button onclick="history.back()">Go Back</button>`);
      }
    })
    .catch(e => res.send(e));

  //haven't checked password
});

//Users API
app.get('/users', (req, res) => {
  db.query('SELECT * FROM users;', (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).send(results.rows);
  })
});
// });
//     .then(users => {
//       res.json({ users });
//     })
//     .catch(err => {
//       res
//         .status(500)
//         .json({ error: err.message });
//     });
// });



// Chat GPT API
app.post('/chatGPT', (req, res) => {
  const relationship = req.body.relationship;
  const proseStyle = req.body.proseStyle;
  const occasion = req.body.occasion;
  const theme = req.body.themes;
  const mood = req.body.mood;
  //this axios promis is to chatGPT.
  axios({
    method: 'post',
    url: "https://api.openai.com/v1/chat/completions",
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
    },
    data: {
      "model": "gpt-3.5-turbo",
      "messages": [{ "role": "user", "content": promptGPT(relationship, proseStyle, occasion, theme, mood) }],
      temperature: 1,
      max_tokens: 256,
    }
  }).then(function (response) {
    const message = response.data.choices[0].message.content
    console.log("generated:", message);
    res.status(200).json({ message });
  });

});

app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});