const express = require('express');
const { sendInquiryEmail } = require('../middleware/sendgrid');

router = express.Router();

router.post('/inquiry', (req, res) => {
    const data = { ...req.body }
    const name = `${data.first} ${data.last}`

       try{
            if (!data.email || !data.first || !data.last || !data.phone || !data.address || !data.message) {
                res.status(400).send("Please enter the required fields");
            }
            sendInquiryEmail(
                data.email, 
                name, 
                data.phone,
                data.address,
                data.message
        )

        res.status(201).send('Email Sent')
       } catch (e) {
           res.send(500).status()
       }

})

module.exports = router
