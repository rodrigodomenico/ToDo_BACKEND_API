const TaskModel = require('../model/TaskModel')
const { isPast } = require('date-fns')

// ESTRUTURA PARA VALIDAR OS CAMPOS OBRIGATORIOS

const TaskValidation = async (req, res, next) => {
  const { macaddress, type, title, description, when } = req.body
  if (!macaddress)
    return res.status(400).json({ error: 'Macaddress é obrigatório.' })
  else if (!type) return res.status(400).json({ error: 'Tipo é obrigatório.' })
  else if (!title)
    return res.status(400).json({ error: 'Titulo é obrigatório.' })
  else if (!description)
    return res.status(400).json({ error: 'Descrição é obrigatória.' })
  else if (!when)
    return res.status(400).json({ error: 'Data e hora são obrigatório.' })
  else if (isPast(new Date(when)))
    return res.status(400).json({ error: 'Escolha uma data e hora futura' })
  else {
    let exist

    if (req.params.id) {
      exist = await TaskModel.findOne({
        _id: { $ne: req.params.id },
        when: { $eq: new Date(when) },
        macaddress: { $in: macaddress },
      })
    } else {
      exist = await TaskModel.findOne({
        when: { $eq: new Date(when) },
        macaddress: { $in: macaddress },
      })
    }
    if (exist) {
      return res
        .status(400)
        .json({ error: 'Já existe uma tarefá nesse dia e horário' })
    }
    next()
  }
}

module.exports = TaskValidation
