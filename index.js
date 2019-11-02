const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
require('dotenv').config();

const port = process.env.PORT;
const app = express();
const quotes = express.Router();

app.listen(port);
console.log(`App listening on ${port}`);
