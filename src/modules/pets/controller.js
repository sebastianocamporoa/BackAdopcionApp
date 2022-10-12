import { deleteLocalFile } from "../../utils/deleteLocalFile.js";
import { deleteFile, uploadFile } from "../../storage/bucket.js";
import { serverResponse } from "../../utils/serverResponse.js";
import { Pet } from "./model.js";
import { PetImage } from "../../modules/petImages/model.js";

export const getAllPets = async (req, res) => {
  try {
    const response = await Pet.findAll();
    res.status(200).send(serverResponse({ data: response }));
  } catch (err) {
    res.status(400).send(err);
  }
};

export const getPetById = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await Pet.findOne({ where: { id }, include: PetImage });
    res.status(200).send(serverResponse({ data: response }));
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

    if (!req.body.data || req.files.length === 0) {
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

    req.files.map(async (file) => {
      const fileData = await uploadFile(file);
      await PetImage.create({
        key: fileData.Key,
        url: fileData.Location,
        pet_id: dataValues.id,
      });
      deleteLocalFile(file.path);
    });

    res.status(200).send(
      serverResponse({
        message: "Mascota registrada",
        data: dataValues,
      })
    );
  } catch (err) {
    console.log(err);
    res.status(400).send(serverResponse({ status: "dudoso", error: err }));
  }
};

export const updatePet = async (req, res) => {
  try {
    const pet = JSON.parse(req.body.data);
    const { id } = req.params;

    await Pet.update({ ...pet }, { where: { id } });

    if (req.files && req.files.length > 0) {
      req.files.map(async (file) => {
        await uploadFile(file);
        await PetImage.create({
          key: file.Key,
          url: file.Location,
          pet_id: file.id,
        });
        deleteLocalFile(file.path);
      });
    }

    if (pet.delete_images?.length > 0) {
      pet.delete_images.map(async (key) => {
        await deleteFile(key);
        await PetImage.destroy({
          where: { key: key },
        });
      });
    }

    res.status(200).send(serverResponse({ message: "Mascota actualizada" }));
  } catch (err) {
    console.log(err);
    res.status(400).send(serverResponse({ status: "dudoso", error: err }));
  }
};
