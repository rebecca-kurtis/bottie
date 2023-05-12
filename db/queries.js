const db = require('../connection');

const getUsers = () => {
  return db.query('SELECT * FROM users;')
    .then(data => {
      return data.rows;
    });
};

//returns an empty array if no user exists with email, otherwise returns the user from the users table
const getUser = function(email) {
  return db
    .query('SELECT * FROM users WHERE email = $1',[email])
    .then(data => {
      return data.rows[0];
    });
};

//takes a user object { name, email, password } and adds it to the users table
const addUser = function(user) {
  return db
    .query('INSERT INTO users (first_name, last_name, email, password, address, city, state, country, postal_code) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING *',[
      user.first_name, 
      user.last_name, 
      user.email, 
      user.password,
      user.address, 
      user.city, 
      user.state,
      user.country,
      user.postal_code
    ])
    .then(data => {
      return data.rows[0];
    });
};
module.exports = { getUsers, getUser, addUser };


// first_name VARCHAR(255) NOT NULL,
// last_name VARCHAR(255) NOT NULL,
// email VARCHAR UNIQUE NOT NULL,
// password VARCHAR(255) NOT NULL,
// phone VARCHAR(255) NOT NULL,
// address VARCHAR(255) NOT NULL,
// city VARCHAR(255) NOT NULL,
// state VARCHAR(255) NOT NULL,
// country VARCHAR(255) NOT NULL,
// postal_code VARCHAR(255) NOT NULL