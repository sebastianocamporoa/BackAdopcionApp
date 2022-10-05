import { Country } from "../models/Country.js";

export const getCountries = async (req, res) => {
  Country.findAll()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};
