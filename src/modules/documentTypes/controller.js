import { DocumentType } from "./model.js";

export const getAllDocumentTypes = (req, res) => {
  DocumentType.findAll()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};
