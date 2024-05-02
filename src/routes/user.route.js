const express = require('express');
const router = express.Router();
const { signIn, getUser, getById, updateById, deleteUser } = require('../controllers/controller');

//create user
router.post('/user', signIn);

//read users
router.get('/user', getUser);

//read user by id
router.get('/user/:id', getById);

//update users
router.put('/user/:id', updateById);

//delete user
router.delete('/user/:id', deleteUser);

module.exports = router