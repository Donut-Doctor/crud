const express = require("express");
const router = express.Router();
const Item = require("../models/Item");

router.get("/", async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

router.post("/", async (req, res) => {
  const newItem = new Item({ name: req.body.name });
  await newItem.save();
  res.json(newItem);
});

router.delete("/:id", async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

module.exports = router;
