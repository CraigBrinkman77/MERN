const AuthorController = require('../controllers/author.controller')

module.exports = function(app){
    app.get('/api', AuthorController.index);
    app.get('/api/authors', AuthorController.getAllAuthors)
    app.post('/api/author', AuthorController.createAuthor)
    app.delete('/api/author/delete/:id', AuthorController.deleteAuthor)
    app.get('/api/author/:id', AuthorController.getAuthor)
    app.put('/api/author/update/:id', AuthorController.updateAuthor)
}
