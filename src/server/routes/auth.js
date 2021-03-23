const express = require('express');
const passport = require('passport');

const router = express.Router();

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (authError, user, info) => {
    if (authError) {
      console.error(authError);
      return next(authError);
    }
    if (!user) {
      return res.status(400).send({ message: info.message });
    }
    return req.login(user, (loginError) => {
      if (loginError) {
        console.error(loginError);
        return next(loginError);
      }
      return res.send(user);
    });
  })(req, res, next);
});

router.get('/login', (req, res, next) => {
  if (req.user) {
    res.status(200).send({ ...req.user });
  } else {
    res.status(400).send({ message: 'not login' });
  }
});

router.get('/logout', function (req, res, next) {
  req.logout();
  req.session.save(function () {
    res.status(200).send({ code: 200 });
  });
});

module.exports = router;
