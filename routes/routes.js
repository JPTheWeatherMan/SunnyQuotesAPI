const mongoose = require('mongoose');
const express = require('express');
const routes = express.Router();
const quote = require('../schemas/Quote');

function find(name, query, cb) {
  mongoose.connection.db.collection(name, function(err, collection) {
    collection.find(query).toArray(cb);
  });
}

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

routes.get('/api', (req, res) => {
  res.status(200).json({ message: '/api' });
});

routes.get('/api/:character', (req, res) => {
  const character = req.params.character;

  // find('IASIPQuotes', { character: character }, function(err, docs) {
  //   console.log(docs);
  // });

  quote.find({ character: character }, (err, iter) => {
    if (err) return console.log(err);
    res.status(200).json(iter);
  });
});

module.exports = routes;
