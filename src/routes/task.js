const router = require('express').Router();

router.get('/getTasks', async(req, res) => {
    
});

router.post('/createTask', async(req, res) => {
    res.sendStatus(200)
});

router.delete('/deleteTask', async(req, res) => {
    res.sendStatus(200)
});

router.put('/updateTask', async(req, res) => {
    res.sendStatus(200)
});

module.exports = router;