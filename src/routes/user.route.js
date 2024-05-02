const express = require('express');
const router = express.Router();
const userSchema = require('../models/user.model');

//create user
router.post('/signIn', (req, res) => {
    const user = userSchema(req.body);
    user
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
});

//read users
router.get('/Users', (req, res) => {
    userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

//read user by id
router.get('/Users/:id', (req, res) => {
    const { id } = req.params;
    userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

//update users
router.put('/Users/:id', (req, res) => {
    const { id } = req.params;
    const { name, email, age } = req.body;
    userSchema
    .updateOne({ _id: id }, { $set: {name, email, age} })
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

//delete user
router.delete('/Users/:id', (req, res) => {
    const { id } = req.params;
    userSchema
    .remove(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

module.exports = router