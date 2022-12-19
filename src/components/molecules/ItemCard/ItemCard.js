import { Component, eventBus } from "../../../core";
import "./ItemCard.scss";
import { appEvents, productCharacteristics } from "../../../constants";
import { appRoutes } from "../../../constants";
import localStorageService from "../../../services/LocalStorage";
import cartService from "../../../services/Cart";

export class ItemCard extends Component {
  static get observedAttributes() {
    return [...productCharacteristics.map((item) => item.name), "id"];
  }

  addItemToCart(evt) {
    if (evt.target.closest("add-item-to-cart-button")) {
      cartService.addItem(this.props.id);
      eventBus.emit(appEvents.changeCart);
    }
  }

  componentDidMount() {
    this.addEventListener("click", this.addItemToCart);
  }

  componentWillUnmount() {
    this.removeEventListener("click", this.addItemToCart);
  }

  render() {
    return `
        <div class="card shadow-sm pt-4" >
          <div class='container image-door-catalog text-center'>
          <ds-link   to="${appRoutes.productPage}/${this.props.id}">
           <img src="${this.props.image}" class="card-img-top "  alt="...">
           </ds-link >
          </div>
        <div class="card-body mb-0">
          <h5 class="card-title fs-4 p-2 fw-light">${this.props.series} <br>${this.props.color}</h5>
          <div class="border-bottom border-top p-2 fs-3 fw-bold ">${this.props.price} Br</div>
            <div class='row p-3 fs-3 align-items-center fw-bold' >
              <ds-link class="col-8"   to="${appRoutes.productPage}/${this.props.id}">
                <div   class="text-nowrap lh-lg  btn btn-outline-warning rounded-pill">Посмотреть товар</div>
              </ds-link >
              <add-item-to-cart-button class=' col-4'></add-item-to-cart-button>
            </div>
        </div>
      </div>
            `;
  }
}

customElements.define("item-card", ItemCard);
