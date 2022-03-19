require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const formRouter = require('./routes/form');

const PORT = process.env.PORT ?? 4000;
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use('/', formRouter);

const start = async () => {
  try {
    // await mongoose.connect(paste your link);
    app.listen(PORT);
  } catch (err) {
    console.log(err);
  }
};

start();
