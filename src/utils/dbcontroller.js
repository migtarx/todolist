const Task = require('../models/Task')

const createTask = async(title, description) => {
    try {
        const newTask = await Task.create({
            title: title,
            description: description
        });
        const saveNewTask = await newTask.save((err, task) => {
            return task.id 
        });
        console.log(saveNewTask)
    } catch (error) {
        return error;
    }
}

const deleteTask = async(title, description) => {
    
}

module.exports = { createTask }