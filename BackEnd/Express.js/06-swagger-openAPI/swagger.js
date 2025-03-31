import swaggerAutogen from 'swagger-autogen';

const doc = {
  info: {
    title: 'My API',
    description: 'This is an auto-generated API documentation',
    version: '1.0.0',
  },
  servers: [
    {
      url: 'http://localhost:3000', // Change this to match your API URL
    },
  ],
};

const outputFile = './swagger-output.json'; // Auto-generated Swagger JSON
const endpointsFiles = ['./server.js']; // Your main API file where routes are defined

swaggerAutogen()(outputFile, endpointsFiles, doc);
