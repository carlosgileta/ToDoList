const toDoDB = [
    {
        id: 1,
        title: "first To Do",
        description: "First work of To Do List", 
        create: "Carlos",
        isComplete: false 
    },
    {
        id: 2,
        title: "first To Do",
        description: "First work of To Do List", 
        create: "Carlos",
        isComplete: false 
    },
    {
        id: 3,
        title: "first To Do",
        description: "First work of To Do List", 
        create: "Carlos",
        isComplete: false 
    }
]



const getAllToDos = () =>{
  return toDoDB
}

const getToDoByID = (id) => {
    const dBId = toDoDB.filter(item => item.id === id)
    return dBId[0]
}

const postNewToDO = (userObj) => {
    if (toDoDB ===0) {
        const newObj = {

            id: 1,
            title: userObj.title,
            description: userObj.description,
            create: userObj.create,
            isComplete: false
        }
      toDoDB.push(newObj)
      return newObj   
    }
     const newObj = {

        id: toDoDB[toDoDB.length - 1].id + 1,
        title: userObj.title,
        description: userObj.description,
        create: userObj.create,
        isComplete: false
    }
    toDoDB.push(newObj)
      return newObj   
}

const deleteToDo = (id) =>{
    const index = toDoDB.findIndex(item => item.id === id)
    toDoDB.splice(index, 1)
    return 
}

const putToDo = (id, data) =>{
    const index = toDoDB.findIndex(item => item.id === id)
    if (index !==-1) {
        toDoDB[index] ={
            id,
            title: data.title,
            description: data.description,
            create: data.create,
            isComplete: data.isComplete
        }
    } else {
        postNewToDO(data)
    }
    return toDoDB
}



module.exports={
    getAllToDos,
    getToDoByID,
    postNewToDO,
    deleteToDo,
    putToDo
}

