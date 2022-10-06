import { Router } from "express";
import { getUsers } from "../controllers/users.controller.js";

const router = new Router();

// path: /countries
router.get("/", getUsers);

export default router;
