import { Router } from "express";
import { upload } from "../../middlewares/upload.js";
import {
  getAllPets,
  getPetById,
  registerPet,
  updatePet,
} from "./controller.js";

const router = new Router();

// path: /pets
router.get("/", getAllPets);
router.get("/:id", getPetById);
router.post("/new-pet", upload.any("images"), registerPet);
router.put("/update-pet/:id", upload.any("images"), updatePet);

export default router;
