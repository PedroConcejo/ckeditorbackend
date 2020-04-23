const router = require('express').Router()

const authRouter = require('./auth.router')
const usersRouter = require('./users.router')
const meRouter = require('./me.router')

const { authUser } = require('../utils')

router.use('/auth', authRouter)
router.use('/users', usersRouter)
router.use('/me', authUser, meRouter)

router.get('/whoami', authUser, (req, res) => {
  res.send(res.locals.user._id)
})

module.exports = router
