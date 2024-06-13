const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const {getHtmlUsers} = require("./getTextHtml");
const {findUserByTg, getSkills} = require("./base");
const {getPasswordByStudentName} = require("./base");
const {getRawProjects} = require("./getTextHtml");
const {getTextSkills} = require("./getTextHtml");
const {getTextExp} = require("./getTextHtml");


process.env.IP = '127.0.5.35';
process.env.PORT = 54071;
const port = 54071;

const start = () => {
    try {
        app.listen(port, () => console.log(`Сервер запущен http://localhost:${port}`))
    } catch (err) {
        console.log(err);
    }
}

app.use(express.static(__dirname + '/css'));
app.use(express.static(__dirname + '/html'));
app.use(express.static(__dirname + '/node_modules'));
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', __dirname + '/html');
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.redirect('/login');
});
app.get('/login', (req, res) => {
    res.render('login', {});
});
app.get('/lk', async (req, res) => {
    if (!await check(req, res)) { res.render('login', {}); }
    let user;
    await findUserByTg(req.cookies.username).then(aaa => user = aaa);
    user.pr = getRawProjects(user);
    user.textSkills = getTextSkills(user.skills);
    user.textExp = getTextExp(user.work_experience);
    res.render('lk2', user);
});
app.get('/lk2', async (req, res) => {
    if (!await check(req, res)) { res.render('login', {}); }
    let user;
    await findUserByTg(req.query.tg).then(aaa => user = aaa);
    user.pr = getRawProjects(user);
    user.textSkills = getTextSkills(user.skills);
    user.textExp = getTextExp(user.work_experience);
    res.render('lk2', user)
});
app.get('/worksheets', async (req, res) => {
    if (!await check(req, res)) { res.render('login', {}); }
    let users;
    await getHtmlUsers().then(x => users = x);
    res.render('worksheets', {list: users});
});
app.get('/settings', async (req, res) => {
    if (!await check(req, res)) { res.render('login', {}); }
    res.render('settings', {});
});
app.get('/exit', (req, res) => {
    res.clearCookie('username');
    res.clearCookie('password');
    res.redirect('/login');
});
app.get('/api/login', async (req, res) => {
    res.cookie('username', req.query.username);
    res.cookie('password', req.query.password);
    res.redirect('/worksheets');
});

async function verification(tg, password){
    const user = await findUserByTg(tg);
    if (!user) {
        return false;
    }
    const correctPassword = await getPasswordByStudentName(user.tg);
    return correctPassword === password;
}
async function check(req, res){
    if (!req.cookies.username || !req.cookies.password){
        return false;
    }
    return await verification(req.cookies.username, req.cookies.password);
}


start();