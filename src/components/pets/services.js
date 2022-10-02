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

services.postPets = (data) => {
    const conn = getConnectionMySql();
    
    return new Promise((resolve, reject) => {
        conn.then((c) => {
            c.connect(async (err) =>{
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

                    c.query(
                        `INSERT INTO pets (name, age, gender, weight, user_id, race_id, status, create_at, update_at, second_race_id, type_pets_id, birthdate)
                        values ('${data.name}', '${data.age}', '${data.gender}', '${data.weight}', '${data.user_id}', '${data.race}', 1, '${create_at}', '${update_at}', ${data.second_race_id}, ${data.type_pets_id}, '${data.birthdate}')`,
                        (err, result) => {
                            if (err) reject(err);
                            else {
                                resolve({ id: result["insertId"], ...data});
                            }
                        }
                    )
                }
            })
        })
    })
}

export default services;