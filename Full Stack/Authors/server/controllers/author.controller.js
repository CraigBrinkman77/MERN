const { response } = require('express');
const {Author} = require('../models/author.model');

module.exports.index = (req, res) => { 
    res.json({
        message: "Hello World"
    });
}

module.exports.createAuthor= (req, res) => {
    Author.create(req.body)
        .then(Author => res.json(Author))
        .catch(err=>res.json(err))
}

module.exports.getAllAuthors = (req, res) => {
    Author.find()
        .then(Authors => res.json(Authors))
        .catch(err => res.json(err))
}

module.exports.getAuthor = (req, res) => {
    Author.findOne({_id: req.params.id})
        .then(Author => res.json(Author))
        .catch(err => res.json(err))
}

module.exports.updateAuthor = (req, res) => {
    Author.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
        .then(updatedAuthor => res.json(updatedAuthor))
        .catch(err => res.json(err))
    }

module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({_id: req.params.id})
        .then(deleteConfrim => res.json(deleteConfrim))
        .catch(err => response.json(err))
}