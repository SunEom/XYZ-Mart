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

app.set('port', process.env.SERVER_PORT);
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(cors());
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

app.use((req, res, next) => {
  const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

app.listen(app.get('port'), () => console.log(`Server listen ${app.get('port')} port`));
