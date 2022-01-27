
const ProductController = require('../controllers/product.controller');

module.exports = function(app){
    app.get('/api', ProductController.index);
    app.get('/api/products', ProductController.getAllProducts)
    app.post('/api/product', ProductController.createProduct)
    app.delete('/api/product/:id', ProductController.deleteProduct)
    app.get('/api/product/:id', ProductController.getProduct)
    app.put('/api/product/:id', ProductController.updateProduct)
}