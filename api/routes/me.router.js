
const router = require('express').Router()

const {
  getMyTask,
  createTask,
  deleteTask,
  updateTask,
  getTaskById
} = require('../controllers/me.controller')

router.get('/', getMyTask)
router.post('/', createTask)
router.delete('/:taskid', deleteTask)
router.put('/:taskid', updateTask)
router.get('/:taskid', getTaskById)

module.exports = router
