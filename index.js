const express = require('express');
require('dotenv').config();
const { connectDB } = require('./src/utils/database');
const userRoutes = require('./src/routes/user.route');
const playersRoutes = require('./src/routes/player.route');
const cors = require('cors');

const server = express();
const PORT = process.env.PORT || 5002;

server.use(express.json());
connectDB();
server.use(cors());
server.use('/user', userRoutes);
server.use('/player', playersRoutes);

server.listen(PORT, () => {
  console.log(`Escuchando puerto http://localhost:${PORT}`);
});