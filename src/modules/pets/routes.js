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
router.post("/newPet", upload.single("image"), registerPet);
router.put("/updatePet", updatePet);

export default router;
