import express from "express";
import { getDetails } from "../controllers/getQueries.js";
import { deleteOffer } from "../controllers/deleteQueries.js";

const router = express.Router();

router.get("/:id", getDetails);

router.delete("/:id", deleteOffer);

export default router;
