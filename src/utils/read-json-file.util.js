import { readFileSync } from "fs";

export const readJsonFile = (filePath) => {
  // Doc data tu file
  const rawFileContent = readFileSync(filePath).toString();
  // Parse raw content thanh Object
  const fileContent = JSON.parse(rawFileContent);

  return fileContent;
};
