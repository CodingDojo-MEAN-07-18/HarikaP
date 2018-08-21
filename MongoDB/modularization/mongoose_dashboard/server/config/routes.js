const mongoose = require('mongoose');
const mongooses = require('../controllers/mongooses.js');

module.exports = function(app){
  app.get('/', function(req, res) {
  //get all mongooses from database
  mongooses.index(req,res);
})

app.get('/mongooses/new',function(req,res){
  mongooses.new(req,res);
});

app.get('/mongooses/:id',function(req,res){
  mongooses.showById(req, res);

})

app.post('/mongooses',function(req,res){
  mngooses.add(req,res);
})

app.get('/mongooses/edit/:id',function(req, res){
  mongooses.findForEdit(req,res);
})

//Edit
app.post('/mongooses/:id',function(req,res){
  mongooses.update(req,res);
});

app.post('/mongooses/destroy/:id', function(req, res){
    mongooses.destroy(req,res);
  });
};
