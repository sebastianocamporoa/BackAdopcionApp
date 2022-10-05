import { Router } from "express";
import { getLocalities } from "../controllers/localities.controller.js";

const router = new Router();

// path: /localities
router.get("/", getLocalities);

export default router;
