const mongoose = require('mongoose');
const Mongoose = require('../models/mongoose.js');

module.exports = {
    index: function(req, res) {
      Mongoose.find({}, function(err, mongoose_data){
        if (err) { console.log(err); }
        res.render('index',{mongooses : mongoose_data});

      })
    },

    showById: function(req,res){
      Mongoose.find({ _id: req.params.id }, function(err, response) {
            if (err) { console.log(err); }
            res.render('show', { mongoose: response[0] });
          })
    },

    add: function(req, res){
      var mongooseInstance = new Mongoose({mongoose_type: req.body.type, desc: req.body.desc})
      mongooseInstance.save(function(err){
      if(err) {
                console.log('something went wrong');
            } else {
                console.log('successfully added a tiger!');
                res.redirect('/');
            }
        })
    },
    new: function(req,res){
      res.render('add');
    },
    findForEdit: function(req, res){
      Mongoose.find({ _id: req.params.id }, function(err, response) {
            if (err) { console.log(err); }
            res.render('edit', { mongoose: response[0] });
          })
    },

    update: function(req, res){
      console.log(req.body.type);
    console.log(req.body.desc);
      Mongoose.update({_id: req.params.id}, {mongoose_type: req.body.type, desc: req.body.desc}, function(err, response) {
            if (err) { console.log(err); }
            res.redirect('/');
          });

    },

    destroy: function(req,res){
      Mongoose .remove({ _id: req.params.id }, function(err, result){
        if (err) { console.log(err); }
        res.redirect('/');
      });
    }
};
