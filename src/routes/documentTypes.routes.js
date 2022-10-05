import { Router } from "express";
import { getDocumentTypes } from "../controllers/documentTypes.controller.js";

const router = new Router();

// path: /users
router.get("/", getDocumentTypes);

export default router;
