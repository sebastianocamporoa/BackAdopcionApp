import { OAuth } from "./model.js";
import { User } from "../../modules/users/model.js";

export const registerUser = async (req, res) => {
  try {
    const user = await getExistingUser(
      req.body.document_type_id,
      req.body.document_number
    );
    if (user) {
      res.status(200).send({ message: "El usuario ya existe mai nigga" });
      return;
    }
    const { dataValues } = await OAuth.create({
      email: req.body.email,
      password: req.body.password,
    });
    const response = await User.create({
      oauth_id: dataValues.id,
      ...req.body,
    });
    res.status(200).send({
      message: "Usuario creado",
      data: { oauth: dataValues, user: response.dataValues },
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

export const autenticateUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const authUser = await OAuth.findOne({ where: { email, password } });
    if (!authUser) {
      res.status(200).send({ message: "Usuario y/o contraseña incorrecto" });
      return;
    }
    const user = await User.findOne({
      where: { oauth_id: authUser.dataValues.id },
    });
    res
      .status(200)
      .send({ message: "Usuario autenticado", data: user.dataValues });
  } catch (err) {
    res.status(400).send(err);
  }
};

const getExistingUser = async (document_type_id, document_number) => {
  try {
    const response = await User.findOne({
      where: {
        document_type_id,
        document_number,
      },
    });
    return response;
  } catch (err) {
    return null;
  }
};
