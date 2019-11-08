const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

function connectToDB() {
  mongoose.connect(process.env.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'IASIPQuotes'
  });

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    console.log('connected');
  });
}

connectToDB();
app.use('/', routes);

app.get('/api/:character', (req, res) => {
  const character = req.params.character;

  mongoose.connection.db.collection(
    'IASIPQuotes',
    collection.find(
      { character: character }.toArray(function(err, results) {
        console.log(results);
      })
    )
  );

  // quote.find({ character: character }, (err, iter) => {
  //   if (err) return console.log(err);
  //   console.log(iter);
  // });
  res.status(200).json('connected');
});

app.listen(port, () => console.log(`App listening on ${port}`));
