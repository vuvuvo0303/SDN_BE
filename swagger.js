// swagger.js
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Định nghĩa cấu hình Swagger
const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'API Documentation',
    version: '1.0.0',
    description: 'Tài liệu API cho dự án Node.js',
  },
  servers: [
    {
      url: 'http://localhost:3000', // URL của API
      description: 'API Development Server',
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ['./routes/*.js'], // Đường dẫn đến các file mô tả API
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
