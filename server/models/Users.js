const mongoose = require('mongoose')

const PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    username: {
        type: String,
        required: true
    }
})

const UserModel = mongoose.model('players', PlayerSchema)
module.exports = UserModel