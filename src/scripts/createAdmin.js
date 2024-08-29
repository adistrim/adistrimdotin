require("dotenv").config({ path: ".env" });
const { MongoClient } = require("mongodb");
const bcrypt = require("bcryptjs");

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

async function createAdminUser() {
  try {
    await client.connect();
    const db = client.db();
    const usersCollection = db.collection("users");

    const adminEmail = "";
    const adminPassword = "";

    const existingAdmin = await usersCollection.findOne({ email: adminEmail });
    if (existingAdmin) {
      console.log("Admin user already exists");
      return;
    }

    const hashedPassword = await bcrypt.hash(adminPassword, 10);

    const result = await usersCollection.insertOne({
      email: adminEmail,
      password: hashedPassword,
      role: "admin",
      name: "Admin User",
    });

    console.log("Admin user created successfully");
  } finally {
    await client.close();
  }
}

createAdminUser().catch(console.error);
