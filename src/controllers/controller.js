const userSchema = require('../models/user.model');

const signIn = (req, res) => {
    const user = userSchema(req.body);
    user
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
};

const getUser = (req, res) => {
    userSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
};


const getById = (req, res) => {
    const { id } = req.params;
    const { name, email, age } = req.body;
    userSchema
        .updateOne({ _id: id }, { $set: {name, email, age} })
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
};


const updateById = (req, res) => {
    const { id } = req.params;
    const { name, email, age } = req.body;
    userSchema
        .updateOne({ _id: id }, { $set: {name, email, age} })
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
};


const deleteUser = (req, res) => {
    const { id } = req.params;
    userSchema
        .remove(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
};

module.exports = { signIn, getUser, getById, updateById, deleteUser }

