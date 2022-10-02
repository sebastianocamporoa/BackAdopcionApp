import { getConnectionMySql } from "../../config/mysql.js";

const services = {};

services.getLocalities = (id) => {

    const conn = getConnectionMySql();
    console.log(id)
    return new Promise((resolve, reject) => {
        conn.then((c) => {
          c.query(`SELECT * FROM locality where cities_id = ${id.id}` , (err, result) => {
            if (err) reject(err);
            else {
              resolve({ result });
            }
          });
        });
      });
}

export default services;