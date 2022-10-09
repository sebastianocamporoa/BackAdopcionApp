import { serverResponse } from "../../utils/serverResponse.js";
import { City } from "./model.js";

export const getAllCities = async (req, res) => {
  try {
    const response = await City.findAll();
    res.status(200).send(serverResponse({ data: response }));
  } catch (err) {
    res.status(400).send(err);
  }
};
