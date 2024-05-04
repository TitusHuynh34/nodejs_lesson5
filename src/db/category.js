import { join } from "path";
import { readJsonFile } from "../utils/read-json-file.util.js";

export class CategoryRepo {
  static _dataFilePath = join(process.cwd(), "./src/db/data/category.json");

  static getCategories() {
    const categories = readJsonFile(this._dataFilePath);
    return categories;
  }
}
