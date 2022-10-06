import { Router } from "express";
import { getAllCities } from "./controller.js";

const router = new Router();

// path: /cities
router.get("/", getAllCities);

export default router;
