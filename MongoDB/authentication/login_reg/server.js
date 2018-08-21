var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session =require('express-session');
// more new code:
app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))
app.use(bodyParser.urlencoded({ extended: true }));
var path = require('path');
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
const flash = require('express-flash');

app.use(flash());

const bcrypt = require('bcrypt');


//database

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/basic_mongoose');
//create mongoose schema:
var UserSchema = new mongoose.Schema({
  first_name:
    { type: String,
      required: [true,'first name cannot be blank'],
      minlength: 2
    },
      last_name:
      {
        type: String,
        required: [true,'last name cannot be blank'],
        minlength: 2
      },
      birthday:
      {
        type: Date,
        required: [true ,'birthday cannot be empty'],
      },
      email:
      {
        type: String,
        required: [true ,'Email cannot be empty'],
      },
      password:
      {
        type: String,
        required: [true ,'password cannot be empty'],
      },
  }, {timestamps: true });

//store schema:
mongoose.model('User', UserSchema);
var User = mongoose.model('User');


app.get('/',function(req,res){
  if (req.session.userID){
        res.redirect("/users");
    } else {
        res.render("index");
    }
  res.render('index');
})

app.post('/register',function(){
  

})
app.listen(8000, function() {
    console.log("listening on port 8000");
})
