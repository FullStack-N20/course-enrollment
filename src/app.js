import express from "express";
import cookieParser from "cookie-parser";

import { mainRouter } from "./router/index.js";
import { mongoDB } from "./config/index.js";
import { logger } from "./utils/logger/index.js";
mongoDB();

const app = express();
const PORT = +process.env.PORT;

// middleware
app.use(express.json());
app.use(cookieParser());

app.use("/course", mainRouter);

// error handling
process.on("uncaughtException", (err) => {
  if (err) console.log(`Uncaught exception:`, err);
  process.exit(1);
});

process.on("unhandledRejection", (ression) =>
  console.log(`Unhandled rejection:`, ression)
);

app.use((err, __, res, next) => {
  if (err) {
    return res
      .status(500)
      .json({ error: err.message || "Internal server error" });
  } else {
    next();
  }
});

app.listen(PORT, logger.info(`Server is running on port ${PORT}`));
