import { serverResponse } from "../../utils/serverResponse.js";
import { Breed } from "./model.js";

export const getAllBreeds = async (req, res) => {
  try {
    const response = await Breed.findAll();
    res.status(200).send(serverResponse({ data: response }));
  } catch (err) {
    res.status(400).send(err);
  }
};
