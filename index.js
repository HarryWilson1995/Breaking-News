// https://rapidapi.com/MyAllies/api/breaking-news/details API I Wish to use

const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.sendFile('./views/index.html', { root: __dirname });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
