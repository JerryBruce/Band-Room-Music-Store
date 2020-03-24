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

router.get("/items", async (req, res) => {
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

// Image Routes
router.patch(
  "/items/:id/image",
  auth,
  upload.single("image"),
  async (req, res) => {
    const _id = req.params.id;

    const item = await Item.findOne({ _id });

    const small = await sharp(req.file.buffer)
      .resize({ width: 250, height: 250 })
      .png()
      .toBuffer();
    const medium = await sharp(req.file.buffer)
      .resize({ width: 350, height: 350 })
      .png()
      .toBuffer();
    const large = await sharp(req.file.buffer)
      .resize({ width: 450, height: 450 })
      .png()
      .toBuffer();

    item.imageSm = small;
    item.imageMed = medium;
    item.imageLg = large;
    await item.save();
    res.send();
  }
);

router.get("/items/:id/small", async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);

    res.set("Content-Type", "image/png");
    res.send(item.imageSm);
  } catch (e) {
    res.status(404).send();
  }
});

router.get("/items/:id/medium", async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);

    res.set("Content-Type", "image/png");
    res.send(item.imageMed);
  } catch (e) {
    res.status(404).send();
  }
});

router.get("/items/:id/large", async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);

    res.set("Content-Type", "image/png");
    res.send(item.imageLg);
  } catch (e) {
    res.status(404).send();
  }
});

module.exports = router;
