const auth = require('basic-auth')

const mwBasicAuth = async (req, res, next) => {
    console.log('middleware: basic auth')

    const user = await auth(req)

    const username = 'test'
    const password = '123456'

    if (user && user.name.toLowerCase() === username.toLowerCase() && user.pass === password) {
        console.log('Basic Auth: success')
        next()
    } else {
        console.log('Basic Auth: failure')
        res.statusCode = 401
        res.end('Access denied')
    }
}

export default mwBasicAuth