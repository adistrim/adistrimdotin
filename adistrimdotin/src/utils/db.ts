import mongoose from "mongoose";

const connectionStr: string = process.env.MONGODB_URI!;
if (!connectionStr) {
  throw new Error("Please define the MONGODB_URI environment variable in your environment config.");
}

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  var mongooseCache: MongooseCache | undefined;
}

let cached = global.mongooseCache as MongooseCache;
if (!cached) {
  cached = global.mongooseCache = { conn: null, promise: null };
}

/**
 * Connects to MongoDB using mongoose with a cached connection.
 * This function will reuse an existing connection if available.
 */

export async function dbConnect(): Promise<typeof mongoose> {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(connectionStr).then((mongooseInstance) => {
      return mongooseInstance;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (error: any) {
    cached.promise = null;
    throw error;
  }

  return cached.conn;
}
