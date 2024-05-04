import { join } from "path";
import { readJsonFile } from "../utils/read-json-file.util.js";

export class CarouselRepo {
  static _dataFilePath = join(process.cwd(), "./src/db/data/carousel.json");

  static getItems() {
    console.log("CWD: ", process.cwd());
    console.log("File path: ", this._dataFilePath);
    return readJsonFile(this._dataFilePath);
  }
}
