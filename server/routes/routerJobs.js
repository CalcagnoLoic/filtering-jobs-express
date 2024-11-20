import express from "express";
import { getAllInformation } from "../controllers/getQueries.js";
import { postNewOffer } from "../controllers/postQueries.js";

const router = express.Router();

router.get("/", getAllInformation);

router.post("/new-offer", postNewOffer);

export default router;
