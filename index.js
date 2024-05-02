const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const userRoutes = require('./src/routes/user.route');

const server = express();
const PORT = process.env.PORT || 5002;

/* Route prueba
server.get('/', (req, res)=> {
    res.send('Welcome to my api')
})*/

server.use(express.json());
server.use('/user', userRoutes);

mongoose
    .connect(process.env.DB_URI)
    .then(()=> console.log('Connected to DB'))
    .catch((error) => console.error(error));

server.listen(PORT, () => console.log(`Server listening on ${PORT}`));