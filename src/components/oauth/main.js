import express from "express";
import controller from "./controller.js";

const oauth = express.Router();

oauth.post("/", controller.register);

export default oauth;
