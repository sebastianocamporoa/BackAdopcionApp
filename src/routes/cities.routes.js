import { Router } from "express";
import { getCities, postCity } from "../controllers/cities.controller.js";

const router = new Router();

// path: /cities
router.get("/", getCities);
router.post("/", postCity);

export default router;
