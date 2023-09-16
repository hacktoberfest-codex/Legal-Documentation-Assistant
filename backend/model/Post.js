const {model, Schema} = require('mongoose');

const postSchema = new Schema({
    createdAt: String,
    docType: String,
    isBot: Boolean,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    }
});

module.exports = model('Post', postSchema);