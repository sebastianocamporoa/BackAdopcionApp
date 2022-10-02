import express from "express";
import controller from "./controller.js";

const pets = express.Router();

pets.get("/", controller.getPets);

pets.post("/", controller.postPets);

export default pets;