const express = require('express');
const playerRouter = express.Router();

const { addPlayer, getPlayer, getById, updateById, deletePlayer } = require('../controllers/players.controller');
const { isAuth } = require('../middleware/auth');

//create user
playerRouter.post('/player', [isAuth], addPlayer);

//read users
playerRouter.get('/player', [isAuth], getPlayer);

//read user by id
playerRouter.get('/player/:id', [isAuth], getById);

//update users
playerRouter.put('/player/:id', [isAuth], updateById);

//delete user
playerRouter.delete('/player/:id', [isAuth], deletePlayer);

module.exports = playerRouter