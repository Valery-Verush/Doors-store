import { Component } from "../../../core";
import "./ItemCard.scss";

export class ItemCard extends Component {
  static get observedAttributes() {
    return ["number"];
  }
  render() {
    return `
        <div class="card shadow-sm pt-4" >
          <div class='container image-door text-center'>
           <img src="https://yurkas.by/upload/Sh/imageCache/185/269/2691024257053680.webp" class="card-img-top "  alt="...">
          </div>
        <div class="card-body mb-0">
          <h5 class="card-title fs-4 p-2 fw-light">Atum Pro ${this.props.number}</h5>
          <div class="border-bottom border-top p-2 fs-3 fw-bold ">100 Br</div>
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
