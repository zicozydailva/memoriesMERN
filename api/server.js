const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config()
const app = express()
const port = process.env.PORT || 4001

app.use(express.json());
app.use(cors())
app.use(morgan('tiny'))

const postRoute = require('./routes/posts');
const connectDB = require('./config/db');

app.use("/api/posts", postRoute)

const start = () => {
    try {
        connectDB()
        app.listen(port, () => console.log(`Server is running on port ${port}`))
    } catch (error) {
        console.log(error);
    }
}

start()
