import { Recommendation } from "../models/recommendation.ts";
import { connectDB } from "../database.ts";

export default async function getRecommendations() {
    try {
        await connectDB();
        return Recommendation.find().sort({ _id: -1 });
    } catch (error) {
        console.error('Failed to get recommendations:', error);
    }
}
