// swagger.js
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'VGOK API',
      version: '1.0.0',
      description: 'API docs for VGOK forum endpoints',
    },
  },
  apis: ['./routes/*.js'], // point to route files with Swagger comments
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
