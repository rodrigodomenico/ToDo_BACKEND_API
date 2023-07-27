const mongoose = require('../config/datebase')
const Schema = mongoose.Schema

// Criando Task - o que precisa

const TaskSchema = new Schema({
  macaddress: { type: String, required: true },
  type: { type: Number, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  when: { type: Date, required: true },
  done: { type: Boolean, default: false },
  create: { type: Date, default: Date.now() },
})

module.exports = mongoose.model('Task', TaskSchema)
