import { City } from "../models/City.js";

export const getCities = async (req, res) => {
  const cities = await City.findAll();
  console.log(cities);
  res.send("senddd");
};

export const postCity = (req, res) => {
  const { name } = req.body;
  City.create({
    name,
  })
    .then(({ dataValues }) => {
      res.status(200).send(dataValues);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};
