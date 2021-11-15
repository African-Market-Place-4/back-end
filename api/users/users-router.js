const router = require('express').Router()
const Users = require('./users-model')

router.get('/', (req, res, next) => {
    Users.getAllUsers()
        .then(users => {
            res.json(users)
        })
        .catch(next)
})

router.post('/', (req, res, next) => {
    // res.status(201).json(await Users.insertUser(req.body))
    Users.insertUser(req.body)
        .then(user => {
            res.json(user)
        })
        .catch(next)
})

module.exports = router