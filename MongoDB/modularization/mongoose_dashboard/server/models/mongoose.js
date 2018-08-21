var mongoose = require('mongoose');

//create mongoose schema:
var MongooseSchema = new mongoose.Schema({
  mongoose_type: {type: String, required:true},
  desc: {type:String, required:true}
}, {timestamps: true});

//store schema:
mongoose.model('Mongoose', MongooseSchema);
var Mongoose = mongoose.model('Mongoose');
//console.log(Mongoose);
