import { writeFileSync } from "fs";

export const writeJsonFile = (filePath, data) => {
  try {
    const rawFileContent = JSON.stringify(data);
    writeFileSync(filePath, rawFileContent);
  } catch (err) {
    //
  }
};
