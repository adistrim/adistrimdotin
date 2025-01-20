import mongoose from "npm:mongoose";
import config from "./config.ts";

let dbConnection: mongoose.Connection | null = null;

let reconnectAttempts = 0;
const MAX_RECONNECT_ATTEMPTS = 5;
const RECONNECT_DELAY_MS = 1000;

export function getDBConnection(): mongoose.Connection | null {
    return dbConnection;
}

export async function connectDB(): Promise<mongoose.Connection> {
    if (!config.DATABASE_URL) {
        throw new Error("Please define the DATABASE_URL environment variable inside .env");
    }

    if (dbConnection && dbConnection.readyState === 1) {
        return dbConnection;
    }

    try {
        const mongooseInstance = await mongoose.connect(config.DATABASE_URL);
        dbConnection = mongooseInstance.connection;

        reconnectAttempts = 0;

        dbConnection.on("connected", () => {
            console.log(`MongoDB connected: ${dbConnection?.name}`);
        });

        dbConnection.on("error", (err) => {
            console.error("MongoDB connection error:", err);
        });

        dbConnection.on("disconnected", () => {
            console.warn("MongoDB disconnected");
            dbConnection = null;

            if (reconnectAttempts < MAX_RECONNECT_ATTEMPTS) {
                reconnectAttempts++;
                console.log(
                    `Attempting to reconnect (attempt #${reconnectAttempts}) in ${RECONNECT_DELAY_MS / 1000}s...`
                );

                setTimeout(() => {
                    void connectDB().catch((err) =>
                        console.error("Reconnection attempt failed:", err)
                    );
                }, RECONNECT_DELAY_MS);
            } else {
                console.error("Maximum reconnection attempts reached. Giving up.");
            }
        });

        console.log(`MongoDB initial connection established: ${dbConnection.name}`);
        return dbConnection;
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error);

        if (reconnectAttempts < MAX_RECONNECT_ATTEMPTS) {
            reconnectAttempts++;
            console.log(
                `Retrying initial connection (attempt #${reconnectAttempts}) in ${RECONNECT_DELAY_MS / 1000
                }s...`
            );

            await new Promise((resolve) => setTimeout(resolve, RECONNECT_DELAY_MS));
            return connectDB();
        } else {
            console.error("Maximum reconnection attempts reached. Could not connect.");
            throw error;
        }
    }
}
