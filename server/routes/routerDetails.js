import express from "express";
import { getDetails } from "../controllers/getQueries.js";

const router = express.Router();

router.get("/:id", getDetails);

export default router;
