const express = require("express");
const cors = require("cors");
const { promptGPT } = require("./helpers/promptGPT");
const app = express();
const axios = require("axios").default;
const dotenv = require("dotenv");
const db = require("../db/connection");

dotenv.config();

app.use(cors());
app.use(express.json());

// Products API
app.get("/products", (req, res) => {
  db.query("SELECT * FROM products", (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).send(results.rows);
  });
});

app.get("/cart/:id", (req, res) => {
  const userId = req.params.id;
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
    ORDER BY cart_item;`,
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).send(results.rows);
    }
  );
});

//Users API
app.get("/users", (req, res) => {
  db.query("SELECT * FROM users;", (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).send(results.rows);
  });
});

// Login API
app.post("/login", (req, res) => {
  const email = req.body.email;
 
  Promise.all([
    db.query(
      "SELECT * FROM users WHERE email = $1;",
      [email]
    ),
    db.query(`SELECT cart_items.cart_item_id AS cart_item, 
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
    WHERE users.email = $1 AND orders.completed = FALSE
    GROUP BY user_name, rName, rAddress, rCity, rState, rPostal_code, cart_item, product_name, product_price, product_drawing 
    ORDER BY cart_item;`, [email]),
  ]).then((queryResults) => {
    console.log('queryResults', queryResults);
    const queryObjectResults = {
      loginKey:queryResults[0].rows,
      cartKey: queryResults[1].rows
    }
    res.status(200).send(queryObjectResults);
  });


});

//recipients get route
app.get("/recipients", (req, res) => {
  db.query("SELECT * FROM recipients;", (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).send(results.rows);
  });
});

//recipients post route for new recipients
app.post("/recipients/add", (req, res) => {
  console.log("req.body", req.body);
  const first_name = req.body.first_name;
  const last_name = req.body.last_name;
  const relationship = req.body.relationship;
  const phone = req.body.phone;
  const address = req.body.address;
  const city = req.body.city;
  const state = req.body.province;
  const country = req.body.country;
  const postal_code = req.body.postal_code;

    Promise.all([
      db.query(
        "INSERT INTO recipients (first_name, last_name, relationship, phone, address, city, state, country, postal_code) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9);",
        [
          first_name,
          last_name,
          relationship,
          phone,
          address,
          city,
          state,
          country,
          postal_code,
        ]
      ),
      db.query("SELECT recipient_id FROM recipients WHERE phone = $1;", [phone]),
    ]).then((queryResults) => {
      console.log(queryResults)
      res.status(200).send(queryResults[1].rows);
    });
});

//recipients post route for existing recipients
app.post("/recipients/update", (req, res) => {
  console.log("req.body", req.body);
  const first_name = req.body.first_name;
  const last_name = req.body.last_name;
  const relationship = req.body.relationship;
  const phone = req.body.phone;
  const address = req.body.address;
  const city = req.body.city;
  const state = req.body.province;
  const country = req.body.country;
  const postal_code = req.body.postal_code;

    Promise.all([
      db.query(
        "UPDATE recipients SET first_name = $1, last_name = $2, relationship = $3, phone = $4, address = $5, city = $6, state = $7, country = $8, postal_code = $9 WHERE phone = $10;",
        [
          first_name,
          last_name,
          relationship,
          phone,
          address,
          city,
          state,
          country,
          postal_code,
          phone
        ]
      ),
      db.query("SELECT recipient_id FROM recipients WHERE phone = $1;", [phone]),
    ]).then((queryResults) => {
      console.log(queryResults)
      res.status(200).send(queryResults[1].rows);
    });
});

// Chat GPT API
app.post("/chatGPT", (req, res) => {
  const relationship = req.body.relationship;
  const proseStyle = req.body.proseStyle;
  const occasion = req.body.occasion;
  const theme = req.body.themes;
  const mood = req.body.mood;
  //this axios promis is to chatGPT.
  axios({
    method: "post",
    url: "https://api.openai.com/v1/chat/completions",
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    data: {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: promptGPT(relationship, proseStyle, occasion, theme, mood),
        },
      ],
      temperature: 1,
      max_tokens: 256,
    },
  }).then(function (response) {
    const message = response.data.choices[0].message.content;
    console.log("generated:", message);
    res.status(200).json({ message });
  });
});

//get order info and cart info
app.get("/validate/:id", (req, res) => {
  const userId = req.params.id;
  db.query(
    `SELECT orders.order_id AS order_id,
    carts.cart_id AS cart_id
    FROM carts
    JOIN orders on carts.order_id = orders.order_id
    JOIN users on orders.user_id = users.user_id
    WHERE users.user_id = $1 AND orders.completed = FALSE;`,
    [userId],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).send(results.rows);
    }
  );
});

//post a cart-item
app.post("/cart-items", (req, res) => {
  const cart_id = req.body.cart_id;
  const product_id = req.body.product_id;
  const recipient_id = req.body.recipient_id;

  Promise.all([
    db.query(
      "INSERT INTO cart_items (cart_id, product_id, recipient_id) VALUES ($1, $2, $3);",
      [cart_id, product_id, recipient_id]
    ),
    db.query("SELECT cart_item_id FROM cart_items WHERE recipient_id = $1;", [recipient_id]),
  ]).then((queryResults) => {
    console.log("queryResults", queryResults);
    res.status(200).send(queryResults[1].rows);
  });
});

app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});
