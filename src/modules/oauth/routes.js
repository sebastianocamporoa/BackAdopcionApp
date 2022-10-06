import { Router } from "express";
import { registerUser, autenticateUser } from "./controller.js";

const router = new Router();

// path: /oauth
router.post("/signup", registerUser);
router.post("/login", autenticateUser);

export default router;
