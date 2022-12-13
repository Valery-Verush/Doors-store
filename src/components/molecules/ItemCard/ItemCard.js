import { Component } from "../../../core";
import "./ItemCard.scss";
import { productCharacteristics } from "../../../constants";

export class ItemCard extends Component {
  static get observedAttributes() {
    return [...productCharacteristics.map((item) => item.name)];
  }
  render() {
    return `
        <div class="card shadow-sm pt-4" >
          <div class='container image-door-catalog text-center'>
           <img src="${this.props.image}" class="card-img-top "  alt="...">
          </div>
        <div class="card-body mb-0">
          <h5 class="card-title fs-4 p-2 fw-light">${this.props.series} <br>${this.props.color}</h5>
          <div class="border-bottom border-top p-2 fs-3 fw-bold ">${this.props.price} Br</div>
          <div class='row p-3 fs-3 fw-bold' >
            <button type="button" class="col-8 btn btn-outline-warning rounded-pill">Посмотреть товар</button>
            <add-basket-button class='col-4'></add-basket-button>
          </div>
          
        </div>
      </div>
            `;
  }
}

customElements.define("item-card", ItemCard);