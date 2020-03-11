const app = require('./app');
const PORT = process.env.PORT || 5000;


app.listen(PORT, (req, res) => {
    console.log(`Listening on ${PORT}`)
})