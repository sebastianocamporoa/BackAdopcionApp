import express from "express";
import controller from "./controller.js";

const localities = express.Router();

localities.get("/:id", controller.getLocalities);

export default localities;