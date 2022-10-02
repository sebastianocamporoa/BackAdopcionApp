import { getConnectionMySql } from "../../config/mysql.js";

const services = {};

services.getCities = () => {
  const conn = getConnectionMySql();

  return new Promise((resolve, reject) => {
    conn.then((c) => {
      c.query("SELECT * FROM cities", (err, result) => {
        if (err) reject(err);
        else {
          resolve({ result });
        }
      });
    });
  });
};

export default services;
