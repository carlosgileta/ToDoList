const express = require('express')
require('dotenv').config()
const toDoRouter = require('../router/toDoRouter').router



const app = express()

const port = process.env.PORT || 8080 

app.use(express.json())
app.use('/ToDoList', toDoRouter)


app.listen(port, () => {
    console.log(`Server started at port ${port}`);
})