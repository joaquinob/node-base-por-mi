const mongoose = require('mongoose');

const playerSchema = mongoose.Schema({
    name: { type: String, required: true },
    position: { type: String, required: true },
    number: { type: Number, requested: true }
});

module.exports = mongoose.model('Player', playerSchema);