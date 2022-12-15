import { databaseService } from "./Database";
class AddItemService {
  constructor() {
    this.database = databaseService;
  }
  createItem(body) {
    return this.database.create("items", body);
  }

  getItems() {
    return this.database.read("items");
  }

  deleteItem(id) {
    return this.database.delete("items", id);
  }

  updateItem(id, body) {
    return this.database.update("items", id, body);
  }
}

export const addItemService = new AddItemService();
