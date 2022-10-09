import { Router } from "express";
import { getAllPets, getPetById } from "./controller.js";

const router = new Router();

// path: /pets
router.get("/", getAllPets);
router.get("/:id", getPetById);

export default router;