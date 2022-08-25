const router = require('express').Router();
const utils = require('../utils/dbcontroller');

router.get('/getTasks', async(req, res) => {
    
});

router.post('/createTask', async(req, res) => {
    const createdTaskId = await utils.createTask("Test", "Hacer lo que mas te guste");
    res.send(createdTaskId)
});

router.delete('/deleteTask', async(req, res) => {
    res.sendStatus(200)
});

router.put('/updateTask', async(req, res) => {
    res.sendStatus(200)
});

module.exports = router;