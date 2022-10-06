import { Router } from "express";
import { getAllLocalities } from "./controller.js";

const router = new Router();

// path: /localities
router.get("/", getAllLocalities);

export default router;
