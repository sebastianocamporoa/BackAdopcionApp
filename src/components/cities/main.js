import express from "express";
import controller from "./controller.js";

const cities = express.Router();

cities.get("/", controller.getCities);

export default cities;
