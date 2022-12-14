import { Component, eventBus } from "../../../core";
import { appEvents, productCharacteristics } from "../../../constants";
import { appRoutes } from "../../../constants";
import * as utils from "../../../utils";
import { databaseService } from "../../../services";
import cartService from "../../../services/Cart";

export class ProductPage extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      item: {},
    };
  }

  static get observedAttributes() {
    return ["id"];
  }

  getProduct() {
    utils.toggleIsLoading(this);
    databaseService
      .getDocument("items", this.props.id)
      .then((data) => {
        this.setState((state) => {
          return {
            ...state,
            item: data,
          };
        });
      })
      .finally(() => {
        utils.toggleIsLoading(this);
      });
  }

  componentDidMount() {
    this.getProduct();
    this.addEventListener("click", this.addItemToCart);
  }

  addItemToCart(evt) {
    if (evt.target.closest(".add-item-to-cart-button-menu")) {
      cartService.addItem(this.props.id);
      eventBus.emit(appEvents.changeCart);
    }
  }

  componentWillUnmount() {
    this.removeEventListener("click", this.addItemToCart);
  }

  render() {
    return this.state.isLoading
      ? `<ds-preloader is-loading="${this.state.isLoading}"></ds-preloader>`
      : `
        <div class=" bg-white bg-gradient shadow-sm pt-4" >
          <div class="row">
            <div class='col-12 col-xl-3  container  text-center px-4'>
              <div class='  container align-items-center text-center my-4'>
                <img src="${this.state.item.image}" class="" alt="...">
              </div>
              <div type="button"  class="mt-20  btn btn-outline-warning btn-lg add-item-to-cart-button-menu  text-nowrap">Добавить в корзину </div>
            </div>
            <div class='col-12 col-xl-6 p-4 container text-center'>
              ${productCharacteristics
                .map(
                  (title) => `
              <div class="border-bottom p-2 fs-3 fw-bold " >${title.label}</div>
              <div class=" p-2 fs-3 mb-2 fw-light" >${
                this.state.item[`${title.name}`]
              }</div>
              `
                )
                .join(" ")}
            </div>
            
          </div>
        </div>
            `;
  }
}

customElements.define("product-page", ProductPage);
