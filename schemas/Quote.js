const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const QuoteSchema = new Schema({
  character: String,
  quotes: Array
});

module.exports = mongoose.model('Quote', QuoteSchema, 'IASIPQuotes');
