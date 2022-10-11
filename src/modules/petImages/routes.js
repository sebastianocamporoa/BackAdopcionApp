import { Router } from "express";
import { getPetImageById } from "./controller.js";

const router = new Router();

// path: /pet-image
router.get("/", getPetImageById);

export default router;
