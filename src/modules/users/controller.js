import { User } from "./model.js";

export const getAllUsers = async (req, res) => {
  User.findAll()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};
