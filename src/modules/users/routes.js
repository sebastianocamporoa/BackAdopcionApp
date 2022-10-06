import { Router } from "express";
import { getAllUsers, getUserById, getUserByDocument } from "./controller.js";

const router = new Router();

// path: /users
router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.get("/:document_type_id/:document_number", getUserByDocument);

export default router;
