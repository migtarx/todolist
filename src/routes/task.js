const router = require('express').Router();
const utils = require('../utils/dbcontroller');

router.get('/getTasks', async(req, res) => {
    const tasks = await utils.getTasks()
    res.send(tasks)
});

router.post('/createTask', async(req, res) => {
    await utils.createTask(req.body.title, req.body.description);
    res.sendStatus(200)
});

router.delete('/deleteTask', async(req, res) => {
    await utils.deleteTask(req.body.id)
    res.sendStatus(200)
});

router.put('/updateTask', async(req, res) => {
    res.sendStatus(200)
});

module.exports = router;