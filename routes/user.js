const express = require('express');
const User = require('../models/User');
const auth = require('../middleware/auth');

const router = express.Router();

// router.post('/user', async (req, res) => {
//   const user = new User(req.body);

//   try {
//     await user.save();
//     const token = await user.generateAuthToken();
//     res.status(200).send(user);
//   } catch (e) {
//     res.status(400).send(e);
//   }
// });

router.post('/admin/login', async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.username,
      req.body.password
    );
    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (e) {
    res.status(400).send();
  }
});

router.post('/admin/logout', auth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter(token => {
      return token.token !== req.token;
    });
    await req.user.save();
    res.send('Logged Out');
  } catch (e) {
    res.status(500).send();
  }
});

router.get('/admin', auth, (req, res) => {
  res.send(req.user);
});

module.exports = router;
