import express from 'express';
import swaggerUi from 'swagger-ui-express';
import fs from 'fs';

const app = express();
const port = process.env.PORT || 3000;
// Load the generated Swagger JSON file
const swaggerDocument = JSON.parse(fs.readFileSync('./swagger-output.json'));

// Sample user data (in-memory)
let users = [
  { id: 1, name: 'Mohammad' },
  { id: 2, name: 'Haniyeh' },
];
// Serve Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Middleware to parse JSON bodies
app.use(express.json());


app.get('/users', (req, res) => {
  res.json(users);
});

app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find((u) => u.id === userId);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.json(user);
});

app.post('/users', (req, res) => {
  const { name } = req.body;
  const newUser = { id: users.length + 1, name };
  users.push(newUser);
  res.status(201).json(newUser);
});

app.put('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex((u) => u.id === userId);

  if (userIndex === -1) {
    return res.status(404).json({ message: 'User not found' });
  }

  const updatedUser = { id: userId, ...req.body };
  users[userIndex] = updatedUser;
  res.json(updatedUser);
});

app.delete('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex((u) => u.id === userId);

  if (userIndex === -1) {
    return res.status(404).json({ message: 'User not found' });
  }

  users = users.filter((u) => u.id !== userId);
  res.json({ message: 'User deleted successfully' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
  console.log('Swagger UI is available at http://localhost:3000/api-docs');
});
