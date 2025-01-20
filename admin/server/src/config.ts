import dotnev from "npm:dotenv";
import process from "node:process";

dotnev.config();

const config = {
    DATABASE_URL: process.env.DATABASE_URL,
    PORT: process.env.PORT,
}

export default config;
