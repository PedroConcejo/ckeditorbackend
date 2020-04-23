
const router = require('express').Router()

const {
  getMyTask,
  createTask,
  deleteTask,
  updateTask
} = require('../controllers/me.controller')

router.get('/', getMyTask)
router.post('/', createTask)
router.delete('/', deleteTask)
router.put('/', updateTask)

module.exports = router
