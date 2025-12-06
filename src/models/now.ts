import mongoose from "mongoose";

export interface ContactItem {
    label: string;
    text: string;
    link: string;
}

export interface NowDocument {
    _id: mongoose.Types.ObjectId;
    last_update: string;
    content: string;
    contact: ContactItem[];
}

const now = new mongoose.Schema({
    last_update: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    contact: {
        type: [
            {
                label: { type: String, required: true },
                text: { type: String, required: true },
                link: { type: String, required: true }, // renamed from value -> link
            },
        ],
        required: true,
        default: [],
    },
});

export const Now = mongoose.models.now || mongoose.model("now", now);
