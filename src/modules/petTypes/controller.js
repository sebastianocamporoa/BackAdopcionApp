import { serverResponse } from "../../utils/serverResponse.js";
import { PetType } from "./model.js";

export const getAllPetTypes = async (req, res) => {
  try {
    const response = await PetType.findAll();
    res.status(200).send(serverResponse({ data: response }));
  } catch (err) {
    res.status(400).send(err);
  }
};
