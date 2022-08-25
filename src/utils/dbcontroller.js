require('dotenv').config()
const Task = require('../models/Task');
const Cryptr = require('cryptr');
const cryptr = new Cryptr(process.env.CRYPTR_SECRET);

const getTasks = async() => {
    try {
        const tasksWithDbIds = await Task.find({}, {title: 1, description:1});
        const taksWithEncryptedIds = tasksWithDbIds.map(task => {
            return { id: cryptr.encrypt(task._id), title: task.title, description: task.description}
        })
        return taksWithEncryptedIds;
    } catch (error) {
        return error;
    }
}

const createTask = async(title, description) => {
    try {
        const newTask = await Task.create({
            title: title,
            description: description
        });
        let newTaskId;
        const saveNewTask = await newTask.save()
        return saveNewTask.id;
    } catch (error) {
        return error;
    }
}

const deleteTask = async(title, description) => {
    
}

module.exports = { createTask, getTasks }