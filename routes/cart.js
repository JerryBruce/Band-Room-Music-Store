const express = require('express');
const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeKey);

const router = express.Router();

router.post('/charge', async (req, res) => {
    const data = {...req.body}

    const charge = await stripe.charges.create({
        amount: data.amount,
        currency: 'usd',
        source: data.token
    })
})
