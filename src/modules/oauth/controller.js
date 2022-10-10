import { OAuth } from "./model.js";
import { User } from "../../modules/users/model.js";
import { serverResponse } from "../../utils/serverResponse.js";

export const registerUser = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        document_type_id: req.body.document_type_id,
        document_number: req.body.document_number,
      },
    });
    const oAuthUser = await OAuth.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (user || oAuthUser) {
      res
        .status(401)
        .send(
          serverResponse({ status: "dudoso", message: "El usuario ya existe" })
        );
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
    res.status(200).send(serverResponse({ data: response.dataValues }));
  } catch (err) {
    res.status(400).send(err);
  }
};

export const authenticateUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const authUser = await OAuth.findOne({ where: { email, password } });
    if (!authUser) {
      res.status(200).send(
        serverResponse({
          message: "Error en usuario y/o contraseña",
          status: "dudoso",
        })
      );
      return;
    }
    const user = await User.findOne({
      where: { oauth_id: authUser.dataValues.id },
    });
    if (!user) {
      serverResponse({
        status: "dudoso",
      });
      return;
    }
    res.status(200).send(
      serverResponse({
        data: user.dataValues,
      })
    );
  } catch (err) {
    res.status(400).send(err);
  }
};
