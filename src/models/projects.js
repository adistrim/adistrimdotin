import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
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
    }
})


export const Project = mongoose.models.projects || mongoose.model('projects', projectSchema);
