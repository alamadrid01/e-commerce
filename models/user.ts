import mongoose from "mongoose"

const Schema = mongoose.Schema

const userSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    profile: {
        data: Buffer,
        contentType: String
    },
    cart: [
        {
            itemId: Number,
            size: String,
            quantity: Number,
            category: String,
            image: {
                data: Buffer,
                contentType: String
            }
        }
    ],
    roles: {
        User: {
            type: Number,
            default: 2001
        },
        Editor: Number,
        Admin: Number
    },
    password: {
        type: String,
        required: true
    },
    refreshToken: String
})

module.exports = mongoose.models.User || mongoose.model('User', userSchema);