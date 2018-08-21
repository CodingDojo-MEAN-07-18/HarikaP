const users = require('../controllers/users.js')

module.exports = function(app){
    app.get('/', function(req, res) {
        users.show(req, res);
    });

    app.get('/:name', function(req, res) {
        users.show_one(req, res);
    });

    app.get('/new/:name', function(req, res) {
        users.add(req, res);
    });

    app.get('/remove/:name', function(req, res) {
        users.remove(req, res);
    });

}
