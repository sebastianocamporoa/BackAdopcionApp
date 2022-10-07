import { Router } from "express";
import { registerUser, authenticateUser } from "./controller.js";

const router = new Router();

// path: /oauth
router.post("/signup", registerUser);
router.post("/login", authenticateUser);

export default router;
