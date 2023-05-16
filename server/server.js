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

app.get('/products', (req, res) => {
  db.query('SELECT * FROM products', (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).send(results.rows);
  })
});

app.get('/cart', (req, res) => {
  userId = req.query.userId;
  db.query(
    `SELECT cart_items.cart_item_id AS cart_item, 
    products.name AS product_name,
    products.drawing_url AS product_drawing, 
    products.price_in_cents AS product_price,
    CONCAT (users.first_name, ' ', users.last_name) AS user_name,
    CONCAT (recipients.first_name, ' ', recipients.last_name) AS rName,
    recipients.address AS rAddress,
    recipients.city AS rCity,
    recipients.state AS rState,
    recipients.postal_code AS rPostal_code
    FROM cart_items 
    JOIN carts on cart_items.cart_id = carts.cart_id
    JOIN orders on carts.order_id = orders.order_id
    JOIN users on orders.user_id = users.user_id
    JOIN products on cart_items.product_id = products.product_id
    JOIN recipients on cart_items.recipient_id = recipients.recipient_id
    WHERE users.user_id = ${userId} AND orders.completed = FALSE
    GROUP BY user_name, rName, rAddress, rCity, rState, rPostal_code, cart_item, product_name, product_price, product_drawing 
    ORDER BY cart_item;`
    , (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).send(results.rows);
    })
})

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