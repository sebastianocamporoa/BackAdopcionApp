import { serverResponse } from "../../utils/serverResponse.js";
import { DocumentType } from "./model.js";

export const getAllDocumentTypes = async (req, res) => {
  try {
    const response = await DocumentType.findAll();
    res.status(200).send(serverResponse({ data: response }));
  } catch (err) {
    res.status(400).send(err);
  }
};
