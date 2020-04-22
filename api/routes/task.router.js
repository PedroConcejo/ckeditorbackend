const router = require('express').Router()

const {
  getAllTask,
  getTaskById,
  deleteTaskById,
  updateTask,
  createTask
} = require('../controllers/task.controller')

router.get('/', getAllTask)
router.get('/:wallid', getTaskById)
router.delete('/:wallid', deleteTaskById)
router.put('/:wallid', updateTask)
router.post('/', createTask)

module.exports = router
