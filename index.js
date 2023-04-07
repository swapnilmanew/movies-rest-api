const express = require('express');
const mongoose = require('mongoose');
const seasonsRouter = require('./routes/seasons');
const episodesRouter = require('./routes/episodes');
const moviesRouter = require('./routes/movies');

const app = express();

// Connect to MongoDB
mongoose
  .connect(
    'mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log(err));

// Middleware
app.use(express.json());
app.use('/seasons', seasonsRouter);
app.use('/episodes', episodesRouter);
app.use('/movies', moviesRouter);

// Start the server
app.listen(3000, () => console.log('Server started on port 3000'));
