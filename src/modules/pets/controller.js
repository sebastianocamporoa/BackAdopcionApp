import { Pet } from "./model.js";

export const getAllPets = async (req, res) => {
    try {
        const response = await Pet.findAll();
    } catch (err) {
        res.status(400).send(err);
    }
}