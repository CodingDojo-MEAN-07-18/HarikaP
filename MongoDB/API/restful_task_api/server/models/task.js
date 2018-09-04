const mongoose = require('mongoose')
const TaskSchema = new mongoose.Schema({
    title: { type: String, required: true, minlength: 2 },
    description: {type: String, required: true, default: ''},
    completed: {type: Boolean, required:true}

}, { timestamps: true });

mongoose.model('Task', TaskSchema);

module.exports = mongoose.model("Task");
