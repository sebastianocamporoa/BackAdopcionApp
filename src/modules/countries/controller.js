import { Country } from "./model.js";

export const getAllCountries = async (req, res) => {
  try {
    const response = await Country.findAll();
    res.status(200).send(response);
  } catch (err) {
    res.status(400).send(err);
  }
};
