import { City } from "./model.js";

export const getAllCities = (req, res) => {
  City.findAll()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};
