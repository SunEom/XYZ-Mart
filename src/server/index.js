const express = require('express');
const session = require('express-session');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));

app.use('/hi', (req, res, next) => {
  res.send('hello');
});
app.use('/hello', (req, res, next) => {
  res.send('hello!!');
});

app.listen(8000, () => console.log(`Server listen ${process.env.SERVER_PORT} port`));
