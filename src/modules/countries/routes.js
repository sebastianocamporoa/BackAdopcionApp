import { Router } from "express";
import { getAllCountries } from "./controller.js";

const router = new Router();

// path: /countries
router.get("/", getAllCountries);

export default router;
