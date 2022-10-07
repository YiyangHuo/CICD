const express = require('express');

const app = express();

process.title = process.argv[2];

const port = normalizePort(process.env.PORT || '3000');

app.get('/', (req, res) => {
		  res.send('FSE TAs are amazing 123!');
});

app.listen(port, () => {
		  console.log(`Example app listening on port ${port}`);
});

function normalizePort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}
