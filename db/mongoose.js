const mongoose = require('mongoose');
const keys = require('../config/dev');

mongoose.connect(dev.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});
