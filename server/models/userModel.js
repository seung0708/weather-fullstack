const pool = require('../database');
const bcrypt = require('bcryptjs');

// Function to create a new user
async function createUser(email, password, city) {
  const hashedPassword = await bcrypt.hash(password, 10);
  return pool.query(
    'INSERT INTO users (email, password, city) VALUES ($1, $2, $3)',
    [email, hashedPassword, city]
  );
}

// Function to find a user by username
async function findUserByEmail(email) {
  const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
  return result.rows[0];
}

// Function to find a user by ID
async function findUserById(id) {
  return await pool.query('SELECT * FROM users WHERE id = $1', [id]);
  
}


module.exports = {
  createUser,
  findUserByEmail,
  findUserById
};
