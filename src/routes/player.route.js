const express = require('express');
const router = express.Router();
const { addPlayer, getPlayer, getById, updateById, deletePlayer } = require('../controllers/players.controller');

//create user
router.post('/player', addPlayer);

//read users
router.get('/player', getPlayer);

//read user by id
router.get('/player/:id', getById);

//update users
router.put('/player/:id', updateById);

//delete user
router.delete('/player/:id', deletePlayer);

module.exports = router