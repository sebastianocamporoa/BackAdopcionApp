import { Locality } from "./model.js";

export const getAllLocalities = (req, res) => {
  Locality.findAll()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};
