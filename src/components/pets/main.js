import { express } from "express";
import controller from "./controller.js";

const pets = express.Router();

pets.get("/", controller.getPets);

export default pets;