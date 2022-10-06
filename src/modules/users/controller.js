import { User } from "./model.js";

export const getAllUsers = (req, res) => {
  User.findAll()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

export const getUserById = (req, res) => {
  const { id } = req.params;
  User.findByPk(id)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

export const getUserByDocument = (req, res) => {
  const { document_type_id, document_number } = req.params;
  User.findOne({ where: { document_type_id, document_number } })
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};
