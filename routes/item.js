const express = require('express');
const sharp = require('sharp');
const Item = require('../models/Item');
const auth = require('../middleware/auth');
const upload = require('../middleware/image');

const router = express.Router();

router.post('/items', auth, async (req, res) => {
  const item = new Item({
    ...req.body
  });

  try {
    await item.save();
    res.status(200).send();
  } catch (e) {
    res.status(400).send();
  }
});

router.patch(
  '/items/:id/image',
  auth,
  upload.single('image'),
  async (req, res) => {
    const _id = req.params.id;

    const item = await Item.findOne({ _id });

    const buffer = await sharp(req.file.buffer)
      .resize({ width: 250, height: 250 })
      .png()
      .toBuffer();

    item.image = buffer;
    await item.save();
    res.send();
  }
);

router.get('/items/:id/image', async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);

    if (!item || !item.image) {
      throw new Error();
    }

    res.set('Content-Type', 'image/png');
    res.send(item.image);
  } catch (e) {
    res.status(404).send();
  }
});

router.get('/items', async (req, res) => {
  try {
    const items = await Item.find({});
    res.send(items);
  } catch (e) {
    res.send();
  }
});

router.patch('/items/:id', auth, async (req, res) => {
  const updates = Object.keys(req.body);

  try {
    const item = await Item.findOne({ _id: req.params.id });

    if (!item) {
      return res.status(400).send();
    }
    updates.forEach(update => (item[update] = req.body[update]));
    await item.save();
    res.send(item);
  } catch (e) {
    res.status(500).send();
  }
});

router.delete('/items/:id', auth, async (req, res) => {
  try {
    const item = await Item.findOneAndDelete({
      _id: req.params.id
    });

    if (!item) {
      res.status(404).send();
    }

    res.send(item);
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
