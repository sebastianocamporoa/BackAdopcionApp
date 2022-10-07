import { DocumentType } from "./model.js";

export const getAllDocumentTypes = async (req, res) => {
  try {
    const response = await DocumentType.findAll();
    res.status(200).send(response);
  } catch (err) {
    res.status(400).send(err);
  }
};
