import { MongoClient } from "mongodb";
import { connectionStr } from "@/utils/db";

const options: object = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

if (!connectionStr) {
  throw new Error('MONGODB_URI is not defined. Make sure it is set in the environment.');
}

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(connectionStr, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(connectionStr, options);
  clientPromise = client.connect();
}

export default clientPromise;
