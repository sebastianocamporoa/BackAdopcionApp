import { City } from "./model.js";

export const getAllCities = async (req, res) => {
  City.findAll()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};
