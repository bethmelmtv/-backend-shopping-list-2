const { Router } = require('express');
// const jwt = require('jsonwebtoken');
const Item = require('../models/Item');

module.exports = Router()
  .get('/', async (req, res) => {
    try {
      const item = await Item.getAll({ ...req.body });
      res.json(item);
    } catch (e) {
      next(e);
    }
  })

  .post('/', async (req, res) => {
    try {
      const addingItem = Item.insert({ ...req.body });
      res.jsdon(addingItem);
    } catch (error) {
      next(e);
    }
  })

  .put('/id', async (req, res) => {
    try {
      const updatingItem = Item.updateById({ ...req.body });
    } catch (error) {
      next(e);
    }
  })

  .delete('/id', async (req, res) => {
    try {
      deleteItem = Item.delete({ ...req.body });
    } catch (error) {
      next(e);
    }
  });

// TO DO - implement items CRUD
