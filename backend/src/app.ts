import express from "express";
import "dotenv/config";
import router from "./routes";

const app = express();

app.use(express.json());
app.use("/", router);

app.get("/health", (_, res) => {
  res.json({ status: "ok" });
});

export default app;
