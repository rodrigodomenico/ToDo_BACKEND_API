const express = require('express')
const router = express.Router()
const TaskValidation = require('../middlewares/TaskValidation')

const TaskController = require('../controller/TaskController')

// ROTAS PARA CRIAR, ATUALIZAR, MOSTRAR, DELETAR E CONCLUIR TAREFAS.

router.post('/', TaskValidation, TaskController.create)
router.put('/:id', TaskValidation, TaskController.update)
router.get('/:id', TaskController.show)
router.delete('/:id', TaskController.delete)
router.put('/:id/:done', TaskController.done)

// ROTAS DE FILTRO DE TAREFAS

router.get('/filter/all/:macaddress', TaskController.all)
router.get('/filter/late/:macaddress', TaskController.late)
router.get('/filter/today/:macaddress', TaskController.Today)
router.get('/filter/week/:macaddress', TaskController.week)
router.get('/filter/month/:macaddress', TaskController.month)
router.get('/filter/year/:macaddress', TaskController.year)

module.exports = router
