const express = require('express');
const app = express();
var path = require('path');
var dust = require('express-dustjs');
const PORT = 3000;
const db = require('./database/database');

db.then(() => console.log('Connected to MongoDB')).catch(err => console.log(err))

app.use(express.json())
app.use(express.static(__dirname + "/public/"));
app.engine('dust', dust.engine({
    useHelpers: true
}));

app.set('view engine', 'dust');
app.set('views', path.resolve(__dirname, './views'));

const taskRoute = require('./routes/task');
app.use('/task', taskRoute);

app.get('/', function (req, res) {
    res.render('index', {
      title: 'Home - Todolist',
    });
});

app.listen(PORT, () => {
    console.log(`Now listening to requests on port ${PORT}`);
    console.log(`Access by http://127.0.0.1:${PORT}`)
});