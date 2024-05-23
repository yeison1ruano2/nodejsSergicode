const express = require('express')
const {config} = require('dotenv')
const bodyParser=require('body-parser')
const mongoose = require('mongoose')
config()

const bookRoutes = require('./routes/book.routes')

const app = express()
app.use(bodyParser.json())
//Conexion a la base de datos mongo
mongoose.connect(process.env.MONGO_URL, {dbName:process.env.MONGO_DB_NAME})
const db = mongoose.connection
app.use('/books',bookRoutes)

const port = process.env.PORT || 3000

app.listen(port,()=>{
  console.log(`Server is running on port ${port}`)
})