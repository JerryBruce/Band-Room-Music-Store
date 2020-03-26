const express = require('express');
const { sendInquiryEmail } = require('../middleware/sendgrid');

router = express.Router();

router.post('/inquiry', (req, res) => {
    const data = { ...req.body }
    const name = `${data.first} ${data.last}`

       try{
        sendInquiryEmail(
            data.email, 
            name, 
            data.phone,
            data.address,
            data.message
        )

        if(!data) {
            res.status(400).send('There is nothing to send')
        }
        res.status(201).send('Email Sent')
       } catch (e) {
           res.send(500).status()
       }

})

module.exports = router
