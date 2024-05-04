const playerSchema = require('../models/players.model');

const addPlayer = (req, res) => {
    const player = userSchema(req.body);
    player
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
};

const getPlayer = (req, res) => {
    playerSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
};


const getById = (req, res) => {
    const { id } = req.params;
    const { name, position, number } = req.body;
    playerSchema
        .updateOne({ _id: id }, { $set: {name, position, number} })
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
};


const updateById = (req, res) => {
    const { id } = req.params;
    const { name, position, number } = req.body;
    userSchema
        .updateOne({ _id: id }, { $set: {name, position, number} })
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
};


const deletePlayer = (req, res) => {
    const { id } = req.params;
    userSchema
        .remove(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
};

module.exports = { addPlayer, getPlayer, getById, updateById, deletePlayer }

