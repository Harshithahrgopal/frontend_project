const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Example logic
  if (email === 'faculty@example.com' && password === '123456') {
    res.status(200).json({ success: true, message: 'Login successful' });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
