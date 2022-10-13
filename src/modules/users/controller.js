import { serverResponse } from "../../utils/serverResponse.js";
import { User } from "./model.js";

export const getAllUsers = async (req, res) => {
  try {
    const response = await User.findAll({ where: { status: 1 } });
    res.status(200).send(serverResponse({ data: response }));
  } catch (err) {
    res.status(400).send(err);
  }
};

export const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await User.findByPk(id);
    res.status(200).send(serverResponse({ data: response }));
  } catch (err) {
    res.status(400).send(err);
  }
};

export const getUserByDocument = async (req, res) => {
  const { document_type_id, document_number } = req.params;
  try {
    const response = await User.findOne({
      where: { document_type_id, document_number },
    });
    res.status(200).send(serverResponse({ data: response }));
  } catch (err) {
    res.status(400).send(err);
  }
};
