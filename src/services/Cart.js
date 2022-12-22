import { appEvents } from "../constants";
import { eventBus } from "../core";
import localStorageService from "./LocalStorage";

class CartService {
  addItem(id) {
    const data = localStorageService.getItem("cart-data");
    if (data?.find((item) => item.id === id)) {
      this.plusQuantity(id);
    } else {
      localStorageService.setItem("cart-data", [
        {
          id: id,
          quantity: 1,
        },
      ]);
    }
    eventBus.emit(appEvents.changeCart);
  }

  deleteItem(id) {
    const data = localStorageService.getItem("cart-data");
    const newData = data.filter((item) => item.id !== id);
    this.update(newData);
  }

  update(newData) {
    localStorageService.removeItem("cart-data");
    localStorageService.setItem("cart-data", newData);
    eventBus.emit(appEvents.changeCart);
  }

  plusQuantity(id) {
    const data = localStorageService.getItem("cart-data");
    const newData = data.map((item) => {
      if (item.id == id) {
        return {
          id: item.id,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    this.update(newData);
  }

  minusQuantity(id) {
    const data = localStorageService.getItem("cart-data");
    const newData = data.map((item) => {
      if (item.id == id && item.quantity > 0) {
        return {
          id: item.id,
          quantity: item.quantity - 1,
        };
      }
      return item;
    });
    this.update(newData);
  }

  clear() {
    this.update([]);
  }
}

const cartService = new CartService();
export default cartService;
