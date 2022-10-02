import services from './services.js';

const controller = {};

controller.getLocalities = ( req, res) => {
    const { params:id } = req;
    console.log(id);
    services
        .getLocalities( id )
        .then(({ result, status = 200 }) => {
            res.status(status).send(result);
          })
          .catch((err) => {
            res.status(400).send(err);
          });
}

export default controller;