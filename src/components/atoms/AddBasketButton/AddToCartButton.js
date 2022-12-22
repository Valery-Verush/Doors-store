import { Component } from "../../../core";

export class AddItemToCartButton extends Component {
  render() {
    return `
    <div class='btn btn-outline-light rounded-pill add-item-to-cart' id="liveToastBtn" type="button">
      <img  src="../../../assets/images/icons/add-to-cart-svgrepo-com.svg" alt='add basket' ></img>
    </div>
    `;
  }
}

customElements.define("add-item-to-cart-button", AddItemToCartButton);
