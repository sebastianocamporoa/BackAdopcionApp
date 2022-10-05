import { Router } from "express";
import { getAllDocumentTypes } from "./controller.js";

const router = new Router();

// path: /users
router.get("/", getAllDocumentTypes);

export default router;
