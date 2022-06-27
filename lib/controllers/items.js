const { Router } = require('express');
const Item = require('../models/Item');
const authenticate = require('../middleware/authenticate');
const authorizeItem = require('../middleware/authorizeItem');

module.exports = Router()
  .get('/', authenticate, async (req, res, next) => {
    try {
      const item = await Item.getAll(req.user.id);
      res.json(item);
    } catch (e) {
      next(e);
    }
  })

  .post('/', authenticate, async (req, res, next) => {
    try {
      const addingItem = await Item.insert({
        ...req.body,
        user_id: req.user.id,
      }); //user_id is coming from middleware
      res.json(addingItem);
    } catch (error) {
      next(error);
    }
  })

  .put('/:id', authenticate, authorizeItem, async (req, res, next) => {
    try {
      const updatingItem = await Item.updateById(req.params.id, req.body);
      console.log(updatingItem, 'Updating an Item');
      res.json(updatingItem);
    } catch (error) {
      next(error);
    }
  })

  .delete('/:id', authenticate, authorizeItem, async (req, res, next) => {
    console.log(req.body.id, 'req body');
    try {
      const deleteItem = Item.delete(req.params.id);
      res.json(deleteItem);
    } catch (error) {
      next(error);
    }
  });

// TO DO - implement items CRUD
