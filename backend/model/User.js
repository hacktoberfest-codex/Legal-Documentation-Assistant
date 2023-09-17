const {model, Schema} = require('mongoose');

const userSchema = new Schema({
    username: String,
    password: String,
    email: String,
    createdAt: String,
    profileIcon: String,
    description: String,
    age: String,
    state: String,
    city: String,
    address: String,
    post: {
        type: Schema.Types.ObjectId,
        ref: 'posts'
    },
    history: [
        {
            summary: String,
            createdAt: String,
            genDoc: String
        }
    ]
});

module.exports = model('User', userSchema);