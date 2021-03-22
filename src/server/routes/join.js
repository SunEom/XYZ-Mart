const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();

const User = require('../models/user');

router.post('/check/id', async (req, res, next) => {
  const exUser = await User.findOne({ where: { user_id: req.body.id } });
  if (!exUser) {
    //   같은 이메일로 가입된 회원이 없는 경우
    res.status(200).send({ message: '사용 가능한 아이디입니다.' });
  } else {
    //   같은 이메일로 가입된 회원이 있는 경우
    res.status(400).send({ message: '이미 등록된 아이디입니다.' });
  }
});

router.post('/check/email', async (req, res, next) => {
  const exUser = await User.findOne({ where: { email: req.body.email } });
  if (!exUser) {
    //   같은 이메일로 가입된 회원이 없는 경우
    res.status(200).send({ message: '사용 가능한 이메일입니다.' });
  } else {
    //   같은 이메일로 가입된 회원이 있는 경우
    res.status(400).send({ message: '이미 등록된 이메일입니다.' });
  }
});

router.post('/', async (req, res, next) => {
  const user_id = req.body.id;
  const phoneNumber = req.body.pnum;
  const { name, password, email } = req.body;
  const hash = await bcrypt.hash(password, 12);
  try {
    await User.create({ user_id, phoneNumber, name, password: hash, email });
    res.status(200).send({ message: 'Join success!' });
  } catch (err) {
    console.error(err);
    next(err);
  }
});
module.exports = router;
