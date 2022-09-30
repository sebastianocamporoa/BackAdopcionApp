import Services from "./services.js";

const controller = {};

controller.register = (req, res) => {
  const { body } = req;

  Services.register(body)
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

export default controller;
