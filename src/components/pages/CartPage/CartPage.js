import { Component, eventBus } from "../../../core";
import localStorageService from "../../../services/LocalStorage";
import { appEvents, appRoutes } from "../../../constants";

export class BassketPage extends Component {
  constructor() {
    super();
    this.state = {
      cartItems: [],
    };
  }

  cartDataAdapter() {}
  getCartItems = () => {
    this.setState((state) => {
      return {
        ...state,
        cartItems: localStorageService.getItem("cart-data"),
      };
    });
  };
  componentDidMount() {
    this.getCartItems();
    eventBus.on(appEvents.changeCart, this.getCartItems);
  }

  componentWillUnmount() {
    eventBus.off(appEvents.changeCart, this.getCartItems);
  }
  render() {
    return this.state.isLoading
      ? `<ds-preloader is-loading="${this.state.isLoading}"></ds-preloader>`
      : `
    <h2 class='fs-2 fw-bold text-center p-5'>Корзина</h2>
    ${
      this.state.cartItems?.[0]
        ? `
        
    
        ${this.state.cartItems
          .map((item) => {
            return `
            <item-cart-card id='${item.id}' quantity='${item.quantity}'></item-cart-card>
          `;
          })
          .join(" ")}
    

    `
        : `<h2 class='fs-2   text-center p-6'>Ваша корзина пока пуста.</h2>
        <ds-link classlink="" stylelink="text-decoration: none" to="${appRoutes.catalog}">
        <h3 class='fs-2   text-center '>Вернуться в магазин</h3>
        </ds-link>`
    }
    `;
  }
}

customElements.define("basket-page", BassketPage);
