import { Router } from "express";
import { getAllBreeds } from "./controller.js";

const router = new Router();

// path: /pet-type
router.get("/", getAllBreeds);

export default router;
