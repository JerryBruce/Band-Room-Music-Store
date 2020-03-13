const express = require('express');
const cors = require("cors");
require("./db/mongoose");
const storeRoutes = require("./routes/item");
const userRoutes = require('./routes/user');

const app = express();

app.use(express.json());
app.use(storeRoutes);
app.use(userRoutes);
app.use(cors());

module.exports = app;