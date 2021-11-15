const router = require('express').Router()
const bcrypt = require('bcryptjs')
const tokenBuilder = require('./token-builder') // eslint-disable-line
const User = require('../users/users-model')

router.post('/register', (req, res, next) => {
    const { username, password } = req.body
    const hash = bcrypt.hashSync(password, 8)
    
    User.insertUser({ username, password: hash })
        .then(newUser => {
            res.status(201).json(newUser)
        })
        .catch(next)
    // res.json({ api: "register" })
})

router.post('/login', (req,res, next) => {
    res.json('login route')
})

module.exports = router