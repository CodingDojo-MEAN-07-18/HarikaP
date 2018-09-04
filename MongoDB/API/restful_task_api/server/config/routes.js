const tasks = require('../controllers/tasks.js')

module.exports = function(app){
    app.get('/task', function(req, res) {
        tasks.show(req, res);
    });

    app.get('/task/:id', function(req, res) {
        tasks.show_one(req, res);
    });

    app.post('/task', function(req, res) {
        tasks.add(req, res);
    });
    app.put('/task/:id',function(req, res){
        tasks.update(req,res);
    });
    app.delete('/task/:id', function(req, res) {
        tasks.remove(req, res);
    });

}
