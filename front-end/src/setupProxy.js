const proxy = require('http-proxy-middleware');

module.exports = (app) => {
    app.use(proxy(['/items', '/admin'], { target: 'http://localhost:5000' }))
}                   