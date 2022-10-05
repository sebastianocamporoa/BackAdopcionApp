import { getConnectionMySql } from "../../config/mysql.js";
import { City } from "../../models/City.js";
const services = {};

services.getCities = () => {
  // const conn = getConnectionMySql();

  // return new Promise((resolve, reject) => {
  //   conn.then((c) => {
  //     c.query("SELECT * FROM cities", (err, result) => {
  //       if (err) reject(err);
  //       else {
  //         resolve({ result });
  //       }
  //     });
  //   });
  // });

  return new Promise(async (resolve, reject) => {
    const response = await City.findAll();

    if (response) {
      resolve(response);
    } else {
      reject("not Found");
    }
  });
};

export default services;
