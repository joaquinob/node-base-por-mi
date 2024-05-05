const express = require('express');
const playerRouter = express.Router();

const { addPlayer, getPlayer, getById, updateById, deletePlayer } = require('../controllers/players.controller');
const { isAuth } = require('../middleware/auth');

//create player
playerRouter.post('/player', [isAuth], addPlayer);

//read player
playerRouter.get('/player', [isAuth], getPlayer);

//read player by id
playerRouter.get('/player/:id', [isAuth], getById);

//update player
playerRouter.put('/player/:id', [isAuth], updateById);

//delete player
playerRouter.delete('/player/:id', [isAuth], deletePlayer);

module.exports = playerRouter