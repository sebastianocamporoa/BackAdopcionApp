import { Country } from "./model.js";

export const getAllCountries = (req, res) => {
  Country.findAll()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};
