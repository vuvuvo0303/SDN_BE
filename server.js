require('dotenv').config();
const express = require('express');
const cors = require('cors'); // Import the cors package
const connection = require('./src/config/database');
const apiRoutes = require('./src/routes/api');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors()); // Enable CORS for all routes and origins
app.use(express.json()); // Parse incoming JSON requests

apiRoutes(app); // Set up the API routes

(async () => {
  try {
    await connection(); // Await database connection

    app.listen(port, () => {
      console.log(`App listening on port ${port}`);
    });
  } catch (error) {
    console.log('>>> Error connecting to DB: ', error);
  }
})();
