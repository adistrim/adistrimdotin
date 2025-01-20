import express from "npm:express";
import { connectDB } from "./database.ts";
import config from "./config.ts";
import projectRouter from "./router/project.ts";
import recommendationRouter from "./router/recommendation.ts";

const app = express();

const startServer = async () => {
  try {
    await connectDB();
    app.listen(config.PORT, () => {
      console.log(`Server running on port ${config.PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
  }
};

app.use('/api/projects', projectRouter);
app.use('/api/recommendations', recommendationRouter);

startServer();
