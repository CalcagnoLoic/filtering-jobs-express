import express from "express";
import pool from "../config/database.js";
import { getAllInformation } from "../controllers/queries.js";

const router = express.Router();

router.get("/", getAllInformation);

router.get("*", (req, res) => {
  return res.send("Sorry, this is invalid URL");
});

export default router;
