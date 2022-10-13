import { Router } from "express";
import { upload } from "../../middlewares/upload.js";
import {
  deletePet,
  getAllPets,
  getPetById,
  registerPet,
  updatePet,
} from "./controller.js";

const router = new Router();

// path: /pets
router.post("/", getAllPets);
router.get("/:id", getPetById);
router.post("/new-pet", upload.any("images"), registerPet);
router.put("/update-pet/:id", upload.any("images"), updatePet);
router.put("/delete-pet/:id", deletePet);

export default router;
