import express from 'express';
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

app.get('/nosotros', (req, res) => {
  res.send('Este es el about us');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});