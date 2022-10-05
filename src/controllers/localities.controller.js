import { Locality } from "../models/Locality.js";

export const getLocalities = async (req, res) => {
  Locality.findAll()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};
