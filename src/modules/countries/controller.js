import { serverResponse } from "../../utils/serverResponse.js";
import { Country } from "./model.js";

export const getAllCountries = async (req, res) => {
  try {
    const response = await Country.findAll({ where: { status: 1 } });
    res.status(200).send(serverResponse({ data: response }));
  } catch (err) {
    res.status(400).send(err);
  }
};
