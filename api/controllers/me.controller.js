
const TaskModel = require('../models/task.model')

const { handleError } = require('../utils')

module.exports = {
  getMyTask,
  createTask,
  deleteTask,
  updateTask,
  getTaskById
}

function getMyTask (req, res) {
  TaskModel
    .find({ author: res.locals.user._id })
    .sort({ tittle: -1 })
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function createTask (req, res) {
  TaskModel
    .create({
      author: res.locals.user._id,
      ...req.body
    })
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function deleteTask (req, res) {
  TaskModel
    .remove({ _id: req.params.taskid })
    .then(response => res.json(response))
    .catch(err => handleError(err, res))
}

function updateTask (req, res) {
  TaskModel
    .findByIdAndUpdate(req.params.taskid, req.body, {
      new: true,
      runValidators: true
    })
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function getTaskById (req, res) {
  TaskModel
    .findById(req.params.taskid)
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}
