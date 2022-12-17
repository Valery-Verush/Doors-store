import { Component } from "../../../core";
import { productCharacteristics } from "../../../constants";
import { appRoutes } from "../../../constants";
import * as utils from "../../../utils";
import { databaseService } from "../../../services";

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
        console.log(data);
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
  }

  render() {
    return this.state.isLoading
      ? `<ds-preloader is-loading="${this.state.isLoading}"></ds-preloader>`
      : `
        <div class=" bg-white bg-gradient shadow-sm pt-4" >
          <div class="row">
            <div class='col-8 p-4 container text-center'>
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
            <div class='col-4 p-4 container text-center'>
              <img src="${this.state.item.image}" class=""  alt="...">
            </div>
          </div>
        </div>
            `;
  }
}

customElements.define("product-page", ProductPage);
