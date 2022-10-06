import { Router } from "express";
import { getAllUsers } from "./controller.js";

const router = new Router();

// path: /users
router.get("/", getAllUsers);

export default router;
