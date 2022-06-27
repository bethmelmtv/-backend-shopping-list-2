const { Router } = require('express');
const Item = require('../models/Item');
const authenticate = require('../middleware/authenticate');
const authorizeItem = '../middleware/Item';

module.exports = Router()
  .get('/', authenticate, async (req, res, next) => {
    try {
      const item = await Item.getAll({ ...req.body });
      res.json(item);
    } catch (e) {
      next(e);
    }
  })

  .post('/', authenticate, async (req, res, next) => {
    try {
      const addingItem = Item.insert({ ...req.body, user_id: req.user.id }); //user_id is coming from middleware
      res.json(addingItem);
    } catch (error) {
      next(error);
    }
  })

  .put('/:id', authenticate, authorizeItem, async (req, res, next) => {
    try {
      const updatingItem = Item.updateById(req.params.id, req.body);
      res.json(updatingItem);
    } catch (error) {
      next(error);
    }
  })

  .delete('/:id', authenticate, authorizeItem, async (req, res, next) => {
    try {
      const deleteItem = Item.delete(req.body.id);
      res.json(deleteItem);
    } catch (error) {
      next(error);
    }
  });

// TO DO - implement items CRUD
