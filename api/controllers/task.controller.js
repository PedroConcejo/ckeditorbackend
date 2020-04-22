const TaskModel = require('../models/task.model')
const { handleError } = require('../utils')

module.exports = {
  getAllTasks,
  getTasksById,
  deleteTasksById,
  updateTasks,
  createTasks
}

function getAllTasks (req, res) {
  const filters = {}
  if (req.query.author) {
    filters.author = { $regex: `${req.query.author}`, $options: 'i' }
  }
  if (req.query.width) {
    filters.width = {
      $lte: `${req.query.width}`
    }
  }
  if (req.query.height) {
    filters.height = {
      $lte: `${req.query.height}`
    }
  }

  TaskModel
    .find(filters)
    .then((response) => res.json(response))
    .catch((err) => handleError(err, res))
}

function getTasksById (req, res) {
  TaskModel.findById(req.params.wallid)
    .then((response) => res.json(response))
    .catch((err) => handleError(err, res))
}

function deleteTasksById (req, res) {
  TaskModel.remove({ _id: req.params.wallid })
    .then((response) => res.json(response))
    .catch((err) => handleError(err, res))
}

function updateTasks (req, res) {
  TaskModel.findByIdAndUpdate(req.params.wallid, req.body, {
    new: true,
    runValidators: true
  })
    .then((response) => res.json(response))
    .catch((err) => handleError(err, res))
}

function createTasks (req, res) {
  TaskModel.create({
    ...req.body
  })
    .then((response) => res.json(response))
    .catch((err) => handleError(err, res))
}
