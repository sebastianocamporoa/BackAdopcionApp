import { Breed } from "./model.js";

export const getAllBreeds = async (req, res) => {
  try {
    const response = await Breed.findAll();
    res.status(200).send(response);
  } catch (err) {
    res.status(400).send(err);
  }
};
