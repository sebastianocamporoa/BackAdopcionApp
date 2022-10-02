import services from "./services.js";

const controller = {};

controller.getCities = (req, res) => {
  services
    .getCities()
    .then(({ result, status = 200 }) => {
      res.status(status).send(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

export default controller;
