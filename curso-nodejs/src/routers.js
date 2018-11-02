const routers = require('express').Router();
const requireDir = require('require-dir');

const ProductController = require('./controllers/ProductController');

routers.get('/products', ProductController.list);
routers.get('/products/:id', ProductController.find);
routers.post('/products', ProductController.save);
routers.put('/products/:id', ProductController.update);
routers.delete('/products/:id', ProductController.delete);

module.exports = routers;