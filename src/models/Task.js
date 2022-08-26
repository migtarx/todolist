const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true }
});

const User = module.exports = mongoose.model('Task', TaskSchema);