import mongoose from "npm:mongoose";

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


export const Project = mongoose.models.project || mongoose.model('project', projectSchema);
