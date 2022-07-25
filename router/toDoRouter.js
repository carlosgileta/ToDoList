const router = require('express').Router()
const toDoHTTP = require('../http/toDoHTTP')

router.route('/')
    .get(toDoHTTP.getAll)

router.route('/:id')
    .get(toDoHTTP.getById)

router.route('/')
    .post(toDoHTTP.newPost)

router.route('/:id')
    .delete(toDoHTTP.deletePost)

router.route('/:id')
    .put(toDoHTTP.editToDO)

exports.router = router

