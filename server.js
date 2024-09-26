// Load environment variables from .env file
require('dotenv').config();

// Import the necessary packages
const express = require('express');
const cors = require('cors');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const connection = require('./src/config/database'); // Cấu hình kết nối cơ sở dữ liệu
const apiRoutes = require('./src/routes/api'); // Định tuyến API

// Initialize the Express app
const app = express();

// Define the port, defaulting to 5000 if not set in environment variables
const port = process.env.PORT || 5000;

// Middleware to enable CORS for all origins (allow cross-origin requests)
app.use(cors());

// Middleware to parse incoming JSON requests
app.use(express.json());

// Swagger configuration
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Your API Documentation',
      version: '1.0.0',
      description: 'API documentation for your application',
    },
    servers: [
      {
        url: `http://localhost:${port}`,
      },
    ],
  },
  apis: ['./src/routes/*.js'], // Đường dẫn tới file route để lấy thông tin API
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Set up API routes from the apiRoutes module
apiRoutes(app);

// IIFE to handle asynchronous database connection and server initialization
(async () => {
  try {
    // Await the connection to the database
    await connection();
    console.log('>>> Successfully connected to the database');

    // Start the server and listen on the specified port
    app.listen(port, () => {
      console.log(`App listening on port ${port}`);
      console.log(`Swagger docs available at http://localhost:${port}/api-docs`);
    });
  } catch (error) {
    // Log any errors that occur during database connection or server initialization
    console.error('>>> Error connecting to DB: ', error);
  }
})();
