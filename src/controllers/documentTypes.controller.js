import { DocumentType } from "../models/DocumentType.js";

export const getDocumentTypes = async (req, res) => {
  DocumentType.findAll()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};
