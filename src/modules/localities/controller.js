import { Locality } from "./model.js";

export const getAllLocalities = async (req, res) => {
  try {
    const response = await Locality.findAll();
    res.status(200).send(response);
  } catch (err) {
    res.status(400).send(err);
  }
};
