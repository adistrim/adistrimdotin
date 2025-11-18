import mongoose from "mongoose";

const recommendation = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    profileLink: {
        type: String,
        required: false
    }
})


export const Recommendation = mongoose.models.recommendations || mongoose.model('recommendations', recommendation);

