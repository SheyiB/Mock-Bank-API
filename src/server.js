const express = require('express');

const pino = require('pino');

const app = express();


const { PORT } = require('./config/env')

const Auth = require('./router/auth')

//Allows us read request body
app.use(express.json())

app.use('/api/auth', Auth)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})