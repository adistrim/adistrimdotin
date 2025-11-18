import mongoose from "mongoose";

const project = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: false
    },
    github: {
        type: String,
        required: false
    },
    tags: {
        type: [String],
        required: false,
        default: []
    }
})


export const Project = mongoose.models.projects || mongoose.model('projects', project);
