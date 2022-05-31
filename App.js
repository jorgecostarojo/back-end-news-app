const express = require('express')
const app = express()
const cors = require('cors')
const news = require('./routes/news')
const archived = require('./routes/archived')
const PORT = process.env.PORT
require('dotenv').config()




//Middlewares
app.use(express.json());
app.use(cors())

//Routes
app.use('/news', news)
app.use('/archived', archived)


//Listen
app.listen(PORT, () => {
    console.log("server started on port 5000")
})