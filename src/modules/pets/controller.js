import { deleteLocalFile } from "../../utils/deleteLocalFile.js";
import { uploadFile } from "../../storage/bucket.js";
import { serverResponse } from "../../utils/serverResponse.js";
import { Pet } from "./model.js";
import { PetImage } from "../../modules/petImages/model.js";

export const getAllPets = async (req, res) => {
    try {
        const { type, gender, breed_id } = req.body;
        let where = {};
        if (type) where.pet_type_id = type;
        if (gender) where.gender = gender;
        if (breed_id) where.breed_id = breed_id;
        console.log("where", where);
        const response = await Pet.findAll({
            where: where
        });
        res.status(200).send(response);
      } catch (err) {
        response.status(400).send(err);
      }
};

export const getPets = async (req, res) => {

}

export const getPetById = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await Pet.findAll({ where: { id }, include: PetImage });
    res.status(200).send(serverResponse({ data: response[0] }));
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
    if (!req.body.data) {
      res.status(400).send(
        serverResponse({
          status: "dudoso",
          message: "No es posible agregar una mascota",
        })
      );
      return;
    }
    const { dataValues } = await Pet.create({
      ...JSON.parse(req.body.data),
    });

    // * temporalmente permite crear mascotas sin imagen
    if (req.file) {
      const fileData = await uploadFile(req.file);
      if (!fileData) {
        res.status(400).send(
          serverResponse({
            status: "dudoso",
            message: "No es posible agregar una mascota",
          })
        );
        return;
      }
      deleteLocalFile(`uploads/${fileData.Key}`);
      await PetImage.create({
        key: fileData.Key,
        url: fileData.Location,
        pet_id: dataValues.id,
      });
    }

    res.status(200).send(
      serverResponse({
        message: "Mascota registrada",
        data: dataValues,
      })
    );
  } catch (err) {
    res.status(400).send(err);
  }
};

export const updatePet = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await Pet.update(
      {
        ...req.body,
      },
      {
        where: { id: id },
      }
    );
  } catch (err) {
    res.status(400).send(err);
  }
};
