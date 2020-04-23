const UserModel = require('../models/users.model')
const TaskModel = require('../models/task.model')

const { handleError } = require('../utils')

module.exports = {
  getMyTask,
  createTask,
  deleteTask,
  updateTask
}

function getMyTask (req, res) {
  TaskModel
    .find({ author: res.locals.user._id })
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
  UserModel
    .remove({ _id: req.params.id })
    .then(response => res.json(response))
    .catch(err => handleError(err, res))
}

function updateTask (req, res) {
  UserModel
    .update({ email: res.locals.user.email }, req.body, {
      new: true,
      runValidators: true
    })
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}
