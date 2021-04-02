const express = require('express');
const session = require('express-session');
const dotenv = require('dotenv');
const path = require('path');
const passport = require('passport');
const passportConfig = require('./passport');
const cookieParser = require('cookie-parser');
const { sequelize } = require('./models');
const AuthRouter = require('./routes/auth');
const JoinRouter = require('./routes/join');
const ProductRouter = require('./routes/product');
const cors = require('cors');

dotenv.config();

const app = express();
passportConfig();
sequelize
  .sync({ force: false })
  .then(() => {
    console.log('DB연결 성공');
  })
  .catch((err) => {
    console.error(err);
  });

app.set('port', process.env.PORT || 8000);
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: true, credentials: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', AuthRouter);
app.use('/join', JoinRouter);
app.use('/product', ProductRouter);

app.listen(app.get('port'), () => console.log(`Server listen ${app.get('port')} port`));
