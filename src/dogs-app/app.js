const express = require('express');
const app = express();
const port = 80;

app.get('/', (req, res) => {
  res.send('Hello from Dogs Application!');
});

app.listen(port, () => {
  console.log(`Dogs app listening on port ${port}`);
});
