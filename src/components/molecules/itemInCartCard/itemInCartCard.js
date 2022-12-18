import { Component } from "../../../core";
import { databaseService } from "../../../services";
import * as utils from "../../../utils";
import "./itemInCart.scss";
import cartService from "../../../services/Cart";
import { appRoutes } from "../../../constants";
export class ItemInCartCard extends Component {
  static get observedAttributes() {
    return ["id", "quantity"];
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

  addItemToCart(evt) {
    if (evt.target.closest(".plus-quantity-item-in-cart")) {
      cartService.plusQuantity(this.props.id);
    } else if (evt.target.closest(".minus-quantity-item-in-cart")) {
      cartService.minusQuantity(this.props.id);
    } else if (evt.target.closest(".remove-item-from-cart")) {
      cartService.deleteItem(this.props.id);
    }
  }

  componentDidMount() {
    this.getProduct();
    this.addEventListener("click", this.addItemToCart);
  }
  componentWillUnmount() {
    this.removeEventListener("click", this.addItemToCart);
  }

  render() {
    const item = this.state.item;

    return this.state.isLoading
      ? `<ds-preloader is-loading="${this.state.isLoading}"></ds-preloader>`
      : `
    <div class="container bg-white mx-0 my-2 m-xl-4 pt-3 pb-3 shadow-sm row text-center align-items-center rounded">
      <div class="col-4 col-xl-4">
        <ds-link   to="${appRoutes.productPage}/${this.props.id}">
          <img class='item-in-cart-image' src='${item?.image}' />
        </ds-link >
      </div>
      <div class="container col-7  row text-center align-items-center">
        <div class="col-12 mb-3 mb-xl-0 col-xl">${item?.brand}<br> ${item?.color}</div>
        <div class="col-12 mb-3 mb-xl-0 col-xl">
          <div class="btn-group rounded-pill" >
            <button type="button" class="btn btn-danger bg-gradient minus-quantity-item-in-cart "><img src="../../../assets/images/icons/placeholders/minus-svgrepo-com.svg" alt="-" width="20" height="20"></button>
            <button  class="basket-item-quanity text-bold fs-5" >${this.props.quantity}</button>
            <button type="button" class="btn btn-success bg-gradient plus-quantity-item-in-cart "><img src="../../../assets/images/icons/placeholders/plus-svgrepo-com.svg" alt="+" width="20" height="20"></button>
          </div>
        </div>
        <div class="col-12 col-xl text-bold fs-3">${item?.price} Br</div>
      </div>
      <div class="col-1  remove-item-from-cart" ><button type="button " class="btn-close" ></button></div>
    </div>
    `;
  }
}

customElements.define("item-cart-card", ItemInCartCard);
