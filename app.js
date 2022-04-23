const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const trackRoute = require('./routes/track.route');
require('dotenv').config();

const corsOptions = {
  origin: '*',
  methods: 'GET',
};

const app = express();
app.use(cors(corsOptions));
app.use(bodyParser.json());

app.use(trackRoute);

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(process.env.PORT || 3002, () => {
      console.log(
        `Mongo Connected!, \nApp works on ${process.env.PORT || 3002}`,
      );
    });
  })
  .catch((err) => console.log(err));
