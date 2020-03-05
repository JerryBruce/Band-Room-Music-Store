const express = require('express');
const Item = require('../models/Item');

const  router = express.Router();

router.post('/items', async (req, res) => {
    const item = new Item({
        ...req.body
    })

    try{
        await item.save()
        res.status(200).send(task)
    } catch (e) {
        res.status(400).send(e)
    }
})

module.exports = router