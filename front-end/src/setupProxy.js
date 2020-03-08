const proxy = require('http-proxy-middleware');

module.exports = (app) => {
    app.use(proxy(['/items'], { target: 'http://localhost:5000' }))
}                   