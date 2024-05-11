const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = 3000;

const start = () => {
    try {
        app.listen(port, () => console.log(`Сервер запущен http://localhost:${port}`))
    } catch (err) {
        console.log(err);
    }
}

app.use(express.static(__dirname + '/css'));
app.use(express.static(__dirname + '/node_modules'));
app.use(express.static(__dirname + '/html'));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.get('/', (req, res) => {
    res.redirect('/login');
});
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/html/login.html');
});
app.get('/lk', (req, res) => {
    res.sendFile(__dirname + '/html/lk.html');
});
app.get('/lk2', (req, res) => {
    res.sendFile(__dirname + '/html/lk2.html');
});
app.get('/worksheets', (req, res) => {
    res.sendFile(__dirname + '/html/worksheets.html');
});


start();

