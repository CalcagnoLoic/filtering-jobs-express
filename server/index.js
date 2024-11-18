import express from "express";
import router from "./routes/router.js";
import cors from "cors";

const app = express();

const corsOptions = {
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowHeaders: ["Content-Type"],
};

app.use(cors(corsOptions));

app.use("/", router);

app.listen(3000);
