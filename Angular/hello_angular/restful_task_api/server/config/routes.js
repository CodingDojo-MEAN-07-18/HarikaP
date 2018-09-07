const tasks = require('../controllers/tasks.js')

module.exports = function(app){
    app.get('/tasks', function(req, res) {
        tasks.show(req, res);
    });

    app.get('/tasks/:id', function(req, res) {
        tasks.show_one(req, res);
    });

    app.post('/tasks', function(req, res) {
        tasks.add(req, res);
    });
    app.put('/tasks/:id',function(req, res){
        tasks.update(req,res);
    });
    app.delete('/tasks/:id', function(req, res) {
        tasks.remove(req, res);
    });

}
