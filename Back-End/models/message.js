const mongoose = require('mongoose');

// Initial message schema -- UPDATE IF NEEDED
const MessageSchema = new mongoose.Schema({
    // Chat room models are associated with a message
    chatRoom: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ChatRoom',
        required: true
    },
    // User models are associated with a message
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    // Texts in the form of strings are the actual message
    text: {
        type: String,
        required: false
    },
    // Attachment models are associated with a message
    attachments: {
        type: [String],
        required: false
    },
    // Created at gives time stamp for a message
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Message', MessageSchema);
