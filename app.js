const express = require('express');

const PORT = 3000;

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

const server = app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

app.get('/', (req, res, next) => {
  const payload = {
    pageTitle: 'Home',
  };

  res.status(200).render('home', payload);
});
