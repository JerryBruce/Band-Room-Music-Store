const express = require('express');
require('./db/mongoose');
const storeRoutes = require('./routes/item');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json())
app.use(storeRoutes)

app.listen(PORT, (req, res) => {
    console.log(`Listening on ${PORT}`)
})