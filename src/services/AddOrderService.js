import { databaseService } from "./Database";
class AddOrderService {
  constructor() {
    this.database = databaseService;
  }
  createOrder(body) {
    return this.database.create("orders", body);
  }

  getOrder() {
    return this.database.read("orders");
  }

  deleteOrder(id) {
    return this.database.delete("orders", id);
  }
}

export const addOrderService = new AddOrderService();
