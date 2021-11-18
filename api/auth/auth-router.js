const router = require('express').Router()
const bcrypt = require('bcryptjs')
const tokenBuilder = require('./token-builder') 
const Users = require('../users/users-model')
const { checkLoginBody, checkRegisterBody} = require("../users/users-middleware")

router.post('/register',checkRegisterBody, (req, res, next) => {
    const { username, password } = req.body
    const hash = bcrypt.hashSync(password, 8)
    
    Users.insertUser({ username, password: hash })
        .then(newUser => {
            res.status(201).json(newUser)
        })
        .catch(next)
})

router.post('/login',checkLoginBody,  (req, res, next) => {
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
