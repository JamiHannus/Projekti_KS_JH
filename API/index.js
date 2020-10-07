const express = require('express')
const app = express()
const port = 4000;
const itemComponent = require('./components/items');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');

const customHeaderCheckerMiddleware = function(req, res, next) {
  console.log('Middleware is active!');
  if(req.headers['custom-header-param'] === undefined)
  {
      return res.status(400).json({ reason: "custom-header-param header missing"});
  }

  // pass the control to the next handler in line
  next();
}

app.use(bodyParser.json());
app.use(cors()) 


app.use('/items', itemComponent);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})