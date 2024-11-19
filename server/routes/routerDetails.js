import express from "express";
import { getDetails } from "../controllers/queries.js";

const router = express.Router();

router.get("/:id", getDetails);

export default router;
