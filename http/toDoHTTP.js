// const { getAllToDos, getToDoByID, postNewToDO, deleteToDo, putToDo} = require('../controllers/toDoControllers')
const toDoControllers = require('../controllers/toDoControllers')



const getAll = (req, res) => {
    res.json(toDoControllers.getAllToDos())
    
}


const getById = (req, res) => {
    const id = Number(req.params.id)
    const dBId = toDoControllers.getToDoByID(id)

    if (dBId) {
        res.json(dBId)
    } else {
        res.status(400).json({
            message: "Invalid ID"
        })
    }
}

const newPost = (req, res) => {
    const data = req.body
    const response = toDoControllers.postNewToDO(data)
    res.status(201).json(response)
}

const deletePost = (req, res) => {
    const id = Number(req.params.id)
    toDoControllers.deleteToDo(id)
    res.status(204).json({message: "Deleted successfully!!!"})
}

const editToDO = (req, res) => {
    const id = Number(req.params.id)
    const data = req.body

    const response = toDoControllers.putToDo(id, data)
    res.status(201).json(response)
}

module.exports = {
    getAll,
    getById,
    newPost,
    deletePost,
    editToDO
}