import express from "express";
import routerJobs from "./routes/routerJobs.js";
import routerDetails from "./routes/routerDetails.js";
import cors from "cors";

const app = express();

const corsOptions = {
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowHeaders: ["Content-Type"],
};

app.use(cors(corsOptions));

app.use("/", routerJobs);
app.use("/job-details", routerDetails);

app.get("*", (req, res) => {
  return res.status(404).send("Invalid URL");
});

app.listen(3000);
