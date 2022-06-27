const { Router } = require('express');
const jwt = require('jsonwebtoken');
const Item = require('../models/Item');

module.exports = Router().get('/', async (req, res) => {
  try {
    const item = await Item.getAll({ ...req.body });
  } catch (error) {
    next(e);
  }
});

// TO DO - implement items CRUD
