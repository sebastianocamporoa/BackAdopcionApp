import { request } from "express";
import { Pet } from "./model.js";

export const getAllPets = async (req, res) => {
  try {
    const response = await Pet.findAll();
  } catch (err) {
    res.status(400).send(err);
  }
};

export const getPetById = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await Pet.findByPk(id);
    res.status(200).send(response);
  } catch (err) {
    res.status(400).send(err);
  }
};

export const registerPet = async (req, res) => {
  try {
    //por el momento no existe forma de validar que una persona
    //no publique la misma mascota 2 veces, queda pendiente esta validación.

    // const pet = await Pet.findOne({
    //     where: {
    //     }
    // })

    // if (pet) {
    //   res
    //     .status(200)
    //     .send({ message: "La mascota ya existe mai nigga", status: "dudoso" });
    //   return;
    // }

    const { dataValues } = await Pet.create({
        ...request.body
    })

    //Pendiente hacer registro en images_pets

    res.status(200).send({
        message: "Mascota registrada",
        data: dataValues,
      });
  } catch (err) {
    res.status(400).send(err);
  }
};


export const updatePet = async (req, res) => {
    try {
        const id = req.params.id;
        const response = await Pet.update(
        {
            ...req.body
        },
        {
            where: { id: id },
        })
    } catch (err) {
        res.status(400).send(err);
    }
}