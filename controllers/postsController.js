const db = require("../models");

//Define Methods for the posts Controller

module.exports = {

    //find all
    findAll: function (req, res) {
        db.Books.find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.json(err));
    },
    findById: function (req, res) {
        db.Books.findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.json(err));
    },
    create: function (req,res){
        db.Books.create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.json(err));
    },
    remove: function(req, res) {
        console.log("this: ",req.params.id)
        db.Books.findOne({ id: req.params.id })
          .then(dbModel => dbModel.remove())
          .then(dbModel => res.json(dbModel))
          .catch(err => res.json(err));
      }
}