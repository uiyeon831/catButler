const express = require('express');
const User = require('../models/User');
const router = express.Router();

//회원가입
router.post('/register', async (req, res, next) => {
  try {
    const user = new User(req.body);
    await user.save();
    return res.sendStatus(200);
  } catch (error) {
    next(error)
  }
})
