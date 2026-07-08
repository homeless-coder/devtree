const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Routing
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/ecommerce', (req, res) => {
  res.send('Este es el ecommerce');
});


app.get('/blog', (req, res) => {
  res.send('Este es el blog');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});