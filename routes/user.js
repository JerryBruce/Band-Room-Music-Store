const express = require('express');
const User = require('../models/User');

const router = express.Router();

router.post('/admin', async (req, res) => {
    const user = new User(req.body)

    try {
        await user.save()
        res.status(200).send(user)
    } catch(e) {
        res.status(400).send()
    }
})
