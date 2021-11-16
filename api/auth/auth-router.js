const router = require('express').Router()
const bcrypt = require('bcryptjs')
const tokenBuilder = require('./token-builder') 
const Users = require('../users/users-model')

router.post('/register', (req, res, next) => {
    const { username, password } = req.body
    const hash = bcrypt.hashSync(password, 8)
    
    Users.insertUser({ username, password: hash })
        .then(newUser => {
            res.status(201).json(newUser)
        })
        .catch(next)
    // res.json({ api: "register" })
})

router.post('/login', (req, res, next) => {
    const { username, password } = req.body
    Users.findBy({ username })
        .then(([user]) => {
            if (user && bcrypt.compareSync(password, user.password)) {
                const token = tokenBuilder(user)
                res.status(200).json({
                    message: `Welcome, ${user.username}!`,
                    token,
                })
            } else {
                next({ status: 401, message: 'Invalid credentials'})
            }
        })
        .catch(next)
})

module.exports = router
