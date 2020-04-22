const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  tittle: {
    type: String
  },
  task: {
    type: [String]
  }
})

const taskModel = mongoose.model('task', taskSchema)
module.exports = taskModel
