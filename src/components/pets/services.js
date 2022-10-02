import { getConnectionMySql } from "../../config/mysql.js";

const services = {};

services.getPets = () => {
    const conn = getConnectionMySql();

    return new Promise((resolve, reject) => {
        conn.then((c) => {
            c.query("SELECT * FROM pets", (err, result) => {
                if (err) reject(err);
                else{
                    resolve({ result });
                }
            });
        });
    });
}

export default services;