import { Component } from "../../../core";
import "./Catalog.scss";
import * as utils from "../../../utils";
import { addItemService } from "../../../services";
import { productCharacteristics } from "../../../constants";

export class Catalog extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      isLoading: false,
    };
  }

  componentDidMount() {
    this.getItems();
    this.addEventListener("click", this.onClick);
  }

  componentWillUnmount() {
    this.removeEventListener("click", this.onClick);
  }

  getItems() {
    utils.toggleIsLoading(this);
    addItemService
      .getItems()
      .then((data) => {
        this.setState((state) => {
          return {
            ...state,
            items: data,
          };
        });
      })
      .finally(() => {
        utils.toggleIsLoading(this);
      });
  }

  deleteItem = (id) => {
    addItemService.deleteItem(id).then(() => {
      this.getItems();
    });
  };

  onClick = (evt) => {
    const target = evt.target;
    if (target.closest(".delete-action")) {
      const data = target.dataset;
      this.deleteItem(data.id);
    }
  };

  render() {
    return this.state.isLoading
      ? `<ds-preloader is-loading="${this.state.isLoading}"></ds-preloader>`
      : `
    <div class='container conte-center mt-5'>
      <div class="row paginated-list" id="paginated-list" data-current-page="1" aria-live="polite">
      ${this.state.items
        .map(
          (item) => `
          <item-card id="${item.id}" 
          image="${item.image}"
          itemtype="${item.itemtype}"
          ${productCharacteristics
            .map(
              (title) => `
          ${title.name}="${item[`${title.name}`]}"
          `
            )
            .join(" ")} class="col-12 col-xl-3 mb-4 item-card" '></item-card>
      `
        )
        .join(" ")} 
      </div>

      
    </div>
    
        `;
  }
}

customElements.define("ds-catalog", Catalog);

{
  /* <div class="row">
        <div class="col align-self-center mt-5">
          <nav class="pagination-container ">
            <button class="pagination-button" id="prev-button" aria-label="Previous page" title="Previous page">
              &lt;
            </button>
        
            <div id="pagination-numbers">
        
            </div>
        
            <button class="pagination-button" id="next-button" aria-label="Next page" title="Next page">
              &gt;
            </button>
          </nav>
        </div>
      </div>

setTimeout(utils.paginator, 500); */
}
