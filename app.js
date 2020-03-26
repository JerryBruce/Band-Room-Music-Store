const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');
require("./db/mongoose");
const storeRoutes = require("./routes/item");
const userRoutes = require('./routes/user');
const emailRoutes = require('./routes/email');

const app = express();

app.use(express.json());
app.use(storeRoutes);
app.use(userRoutes);
app.use(emailRoutes);
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

module.exports = app;