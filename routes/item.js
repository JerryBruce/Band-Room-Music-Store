const express = require('express');
const Item = require('../models/Item');

const  router = express.Router();

router.post('/items', async (req, res) => {
    const item = new Item({
        ...req.body
    })

    try{
        await item.save()
        res.status(200).send(item)
    } catch (e) {
        res.status(400).send()
    }
})

router.get('/items', async (req, res) => {
    try  {
        const items = await Item.find({});
        res.send(items)
    } catch (e) {
        res.send()
    }
})

module.exports = router