const express = require('express');

const app = express();

const { PORT } = require('./config/env')

//Allows us read request body
app.use(express.json())

app.listen(PORT, () => {
    console.log('Server is running on port 8080');
})