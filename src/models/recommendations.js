import mongoose from "mongoose";

const recommendationSchema = new mongoose.Schema({
    text: String,
    author: String,
    type: String,
    profileLink: String
})


export const Recommendation = mongoose.models.recommendations || mongoose.model('recommendations', recommendationSchema);

