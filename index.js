import express from "express";
import cors from "cors";
import morgan from "morgan";
import http from "http";
import bodyParser from "body-parser";
import "dotenv/config.js";

//routes
import oauth from "./src/components/oauth/main.js";
// import cities from "./src/components/cities/main.js";
// import localities from "./src/components/localities/main.js";
import pets from "./src/components/pets/main.js";

// sequelize db
import { sequelize } from "./src/database/database.js";

// routes
import cities from "./src/routes/cities.routes.js";
import localities from "./src/routes/localities.routes.js";

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

const PORT = 2000;
const runServer = async () => {
  try {
    await sequelize.sync({ force: false });
    console.log("Sync has completed successfully.");
    await server.listen(PORT);
    console.log(`Server running successfully, PORT: ${PORT}`);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

runServer();
