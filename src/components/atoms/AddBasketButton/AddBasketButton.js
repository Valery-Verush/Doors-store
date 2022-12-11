import { Component } from "../../../core";

export class AddBasketButton extends Component {
  render() {
    return `
    <div class='btn btn-outline-light rounded-pill' type="button">
      <img  src="../../../assets/images/icons/add-to-cart-svgrepo-com.svg" alt='add basket'  width="100" ></img>
    </div>
    `;
  }
}

customElements.define("add-basket-button", AddBasketButton);
