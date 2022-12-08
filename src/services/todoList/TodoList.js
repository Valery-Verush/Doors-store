import { Database } from "../database/Database";
class TodoList {
  constructor() {
    this.database = Database.getInstance();
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

export const todoList = new TodoList();
