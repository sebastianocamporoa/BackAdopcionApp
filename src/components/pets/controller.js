import { request } from 'express';
import services from './services.js';

const controller = {};

controller.getPets = (req, res) => {
    services
        .getPets()
        .then(({ result, status = 200 }) => {
            res.status(status).send(result);
        })
        .catch((err) =>{
            request.statusCode(400).send(err);
        });
}

export default controller;