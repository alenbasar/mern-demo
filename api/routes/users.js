const express = require('express');
const router = express.Router();
const User = require('../models/User');

// GET all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.json(res);
  }
});

// POST user
router.post('/', async (req, res) => {
  const newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    age: req.body.age,
    profession: req.body.profession,
  });
  try {
    const saveUser = await newUser.save();
    res.json(saveUser);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
