const express = require('express');
const app = express();
const port = 80;

app.get('/', (req, res) => {
  res.send('Hello from Cats Application!');
});

app.listen(port, () => {
  console.log(`Cats app listening on port ${port}`);
});
