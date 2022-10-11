import { serverResponse } from "../../utils/serverResponse.js";
import { PetImage } from "./model.js";

export const getPetImageById = async (req, res) => {
  try {
    const response = await PetImage.findOne({ where: { key: req.params.key } });
    res.status(200).send(serverResponse({ data: response }));
  } catch (err) {
    res.status(400).send(err);
  }
};
