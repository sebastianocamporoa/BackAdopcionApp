import { request } from "express";
import { Pet } from "./model.js";

export const getAllPets = async (req, res) => {
    try {
        const response = await Pet.findAll();
    } catch (err) {
        res.status(400).send(err);
    }
}

export const getPetById = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await Pet.findByPk(id);
        res.status(200).send(response);
    } catch (err) {
        res.status(400).send(err);
    }
}