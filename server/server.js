import "dotenv/config";
import express from "express";
import cors from "cors";
import projects from "./routes/projects-route.js";

const app = express();
let { PORT, CORS_ORIGIN } = process.env;

PORT = process.env.PORT ?? 8080;

app.use(cors({ origin: CORS_ORIGIN }));
app.use(express.json());

app.use("/api/projects", projects);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
