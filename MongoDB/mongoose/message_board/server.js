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

app.get('/', function(req, res) {
    Message.find({}).then((messages) => {
        res.render("index", {all_messages: messages});
    }).catch((error) => {
        console.log("error: ", error);
    });
});

app.post('/messages/new', (req,res) => {
console.log("POST DATA", req.body);
    Message.create(req.body)
        .then((message) => {
            console.log('message', message);
            res.redirect('/');
        })
         .catch((error)=>{
            console.log("Error: ", error);
            for (let key in error.errors){
                req.flash('messages', err.errors[key].message)
            }
            res.redirect('/');
         });

});


app.post('/messages/:id/comments/new', (req, res) => {
    Comment.create(req.body)
        .then((comment) => {
            Message.findById(req.params.id)
            .then((message) => {
                message.comments.push(comment);
                message.save()
                .then(() => {
                    res.redirect("/");
                });
            })
            .catch((error) => {
                console.log("Error: ", error);
            });
        }).catch((error) => {
            console.log("Error: ", error);
            for (let key in error.errors) {
                req.flash('comments', err.errors[key].message)
            }
            res.redirect("/");
            });
});


app.listen(8000, function() {
    console.log("listening on port 8000");
})

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/basic_mongoose');
//create database:
const CommentSchema = new mongoose.Schema({
    name: { type: String, required: true},
    content: { type: String, required: true},
    },
    { timestamps: true });


const MessageSchema = new mongoose.Schema({
    name: { type: String, required: true},
    content: { type: String, required: true},
    comments: [CommentSchema],
    },
    { timestamps: true });

//store schema:

mongoose.model('Comment', CommentSchema);
var Comment = mongoose.model('Comment');

mongoose.model('Message', MessageSchema);
var Message = mongoose.model('Message');
