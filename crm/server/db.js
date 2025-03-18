// Import the Pool class from the pg (node-postgres) library
const { Pool } = require("pg");

// Use the DATABASE_URL environment variable if it exists; otherwise, fallback to a default configuration
const pool = new Pool({
  connectionString: process.env.DATABASE_URL || "postgres://postgres:postgres@localhost:5432/crm"
});

// Export the pool object so it can be reused in other parts of the application
module.exports = pool;