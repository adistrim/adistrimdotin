if (!process.env.MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

export const connectionStr: string = process.env.MONGODB_URI;