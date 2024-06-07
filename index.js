const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const get = require("./getList")
const {getUsers} = require("./getList");
const {findUserByTg} = require("./base");
const {getRawProjects} = require("./textProj");


// var passport = require('passport');
// var LocalStrategy  = require('passport-local').Strategy;
// var expressSession = require('express-session');
// app.use(expressSession({secret: 'mySecretKey'}));
// app.use(passport.initialize());
// app.use(passport.session());
//
// passport.serializeUser(function(user, done) {
//     done(null, user._id);
// });
//
// passport.deserializeUser(function(id, done) {
//     User.findById(id, function(err, user) {
//         done(err, user);
//     });
// });
//
// passport.use(new LocalStrategy({
//     usernameField: 'email',
//     passwordField: 'password'
// }, function(username, password,done){
//     User.findOne({ username : username},function(err,user){
//         return err
//             ? done(err)
//             : user
//                 ? password === user.password
//                     ? done(null, user)
//                     : done(null, false, { message: 'Incorrect password.' })
//                 : done(null, false, { message: 'Incorrect username.' });
//     });
// }));

const port = 3000;

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
app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', __dirname + '/html');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.redirect('/login');
});
app.get('/login', (req, res) => {
    res.render('login', {});
});
app.get('/lk', (req, res) => {
    res.render('lk_copy', {});
});
app.get('/lk2', async (req, res) => {
    let user;
    await findUserByTg(req.query.tg).then(aaa => user = aaa);
    user.pr = getRawProjects(user);
    res.render('lk2', user)
});
app.get('/worksheets', async (req, res) => {
    let users;
    await getUsers().then(x => users = x);
    res.render('worksheets', {list: users});
});


start();

