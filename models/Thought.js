const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema({
    thoughtText: {
        type: String,
        required: true,
        minglength: 1,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: timestamp => dateFormat(timestamp)
    },
    username: {
        type: String,
        required: true
    },
    reactions: [
        {
            reactionId: {
                type: mongoose.Schema.Types.ObjectId,
                default: () => mongoose.Types.ObjectId()
            },
            reactionBody: {
                type: String,
                required: true,
                maxlength: 280
            },
            username: {
                type: String,
                required: true
            },
            createdAt: {
                type: Date,
                default: Date.now,
                get: timestamp => dateFormat(timestamp)
            }
        }
    ]
});

thoughtSchema.virtual('reactionCount').get(async function () {
    return await this.reactions.length;
});

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;