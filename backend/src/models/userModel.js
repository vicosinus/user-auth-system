const pool = require('../config/db');

const createUsersTableSql = `
  CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
`;

const createUsersTable = async () => {
  try {
    await pool.query(createUsersTableSql);
    console.log('Users table created or already exists');
  } catch (err) {
    console.error('Error creating users table:', err.message);
    process.exit(1);
  }
};

module.exports = { createUsersTable };