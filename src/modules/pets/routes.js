import { Router } from "express";
import { getAllPets, getPetById, registerPet } from "./controller.js";

const router = new Router();

// path: /pets
router.get("/", getAllPets);
router.get("/:id", getPetById);
router.post("/newPet", registerPet);

export default router;
