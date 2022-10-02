import { getConnectionMySql } from "../../config/mysql.js";

const services = {};

services.register = (data) => {
  const conn = getConnectionMySql();

  return new Promise((resolve, reject) => {
    conn.then((c) => {
      c.connect(async (err) => {
        if (err) reject(err);
        else {
          const create_at = new Date()
            .toISOString()
            .slice(0, 19)
            .replace("T", " ");
          const update_at = new Date()
            .toISOString()
            .slice(0, 19)
            .replace("T", " ");

          const findOauth = await services.getOauth(data);
          const findUser = await services.getUserByDocument(data);

          if (findUser.length > 0 || findOauth.length > 0) {
            reject({ message: "Usuario ya existe" });
          } else {
            c.query(
              `INSERT INTO oauth (email, password, status, create_at, update_at)
               values ('${data.email}', '${data.password}', 1, '${create_at}', '${update_at}')`,
              (err, result) => {
                if (err) reject(err);
                else {
                  c.query(
                    `INSERT INTO user
                    (first_name, last_name, document, email, oauth_id, cities_id, status, create_at, update_at)
                    values
                    ('${data.first_name}',
                    '${data.last_name}',
                    '${data.document}',
                    '${data.email}',
                    '${result["insertId"]}',
                    '${data.cities_id}',
                    '1',
                    '${create_at}',
                    '${update_at}')`,
                    (err, result) => {
                      if (err) reject(err);
                      else {
                        resolve(data);
                      }
                    }
                  );
                }
              }
            );
          }
        }
      });
    });
  });
};

services.getOauth = ({ email, password }) => {
  const conn = getConnectionMySql();

  return new Promise((resolve, reject) => {
    conn.then((c) => {
      c.query(
        `SELECT * FROM oauth where email = '${email}' AND password = '${password}'`,
        (err, result) => {
          if (err) reject(err);
          else {
            resolve(result);
          }
        }
      );
    });
  });
};

services.getUserByDocument = ({ document }) => {
  const conn = getConnectionMySql();

  return new Promise((resolve, reject) => {
    conn.then((c) => {
      c.connect((err) => {
        if (err) reject(err);
        else {
          c.query(
            `SELECT * FROM user WHERE document = ${document}`,
            (err, result) => {
              if (err) reject(err);
              else {
                resolve(result);
              }
            }
          );
        }
      });
    });
  });
};

export default services;
