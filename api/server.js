const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const authRouter = require('./auth/auth-router')
const usersRouter = require('./users/users-router')
const itemRouter = require('./items/items-router')

const server = express()

server.use(express.json())
server.use(helmet())
server.use(cors())

server.use('/api/auth', authRouter)
server.use('/api/users', usersRouter)
server.use('/api/items', itemRouter)

server.use((err, req, res, next) => { //eslint-disable-line
  res.status(err.status || 500).json({
    custom: "Issue in Server",
    message: err.message,
    stack: err.stack
  })
})


module.exports = server
