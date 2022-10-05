import { Router } from "express";
import { getUsers } from "./controller.js";

const router = new Router();

// path: /users
router.get("/", getUsers);

export default router;
