import express from "express";
import { getAllInformation } from "../controllers/queries.js";

const router = express.Router();

router.get("/", getAllInformation);

export default router;
