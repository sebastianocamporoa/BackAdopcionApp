import { Router } from "express";
import { getAllPetTypes } from "./controller.js";

const router = new Router();

// path: /pet-type
router.get("/", getAllPetTypes);

export default router;
