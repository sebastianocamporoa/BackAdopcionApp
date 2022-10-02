import express from "express";
import cors from "cors";
import morgan from "morgan";
import http from "http";
import bodyParser from "body-parser";
import "dotenv/config.js";
//routes
import oauth from "./src/components/oauth/main.js";
import cities from "./src/components/cities/main.js";
import localities from "./src/components/localities/main.js";
import pets from "./src/components/pets/main.js";

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const server = http.createServer(app);

app.get("/", (req, res) => {
  res.send("The server is Ok");
});

app.use("/oauth", oauth);
app.use("/cities", cities);
app.use("/localities", localities);
app.use("/pets", pets);

server.listen(3000, () => {
  console.log("launch success port: 3000");
});
