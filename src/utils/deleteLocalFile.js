import fs from "fs";
import { promisify } from "util";

export const deleteLocalFile = promisify(fs.unlink);
