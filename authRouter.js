const Router = require('express')
const router = new Router()
const controller = require('./authController')
const {check} = require("express-validator")
const authMiddleware = require('./middlewaree/aut\hMiddleware')
const roleMiddleware = require('./middlewaree/roleMiddleware')
const bodyParser = require('body-parser')

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }));

router.post('/registration', [
    check('username', "Имя пользователя не может быть пустым").notEmpty(),
    check('password', "Пароль должен быть больше 4 и меньше 10 символов").isLength({min:4, max:10})
], controller.registration)
router.post('/log', controller.login)
router.get('/lk', authMiddleware, () => {
    res.sendFile(__dirname + '/html/login.html');
})

module.exports = router