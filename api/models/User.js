var mongoose = require('mongoose')

const { Schema, model } = mongoose;

const userSchema = new Schema({
    user_id: Number,
    username: String,
    email: String,
    passwordHash: String,
    registration_date: Date
});

const User = model('User', userSchema);

module.exports = User;