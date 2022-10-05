import { Router } from "express";
import { getCities } from "../controllers/cities.controller.js";

const router = new Router();

// path: /cities
router.get("/", getCities);

export default router;
