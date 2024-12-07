const express = require('express');
const app = express();
app.use(express.json());
app.post('/data', (req, res) => {
  try {
    if (Object.keys(req.body).length === 0) {
      return res.status(400).json({ error: 'Request body is empty' });
    }
    console.log(req.body);
    res.send('Data received');
  } catch (error) {
    console.error('Error parsing JSON:', error);
    res.status(400).json({ error: 'Invalid JSON request body' });
  }
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});