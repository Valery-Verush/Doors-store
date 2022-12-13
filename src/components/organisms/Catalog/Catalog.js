import { Component } from "../../../core";
import "./Catalog.scss";
import { paginator } from "../../../utils";
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
    addItemService.getItems().then((data) => {
      this.setState((state) => {
        return {
          ...state,
          items: data.map((item) => ({ ...item, isEditting: false })),
        };
      });
    });
    paginator();
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
    let arr = Array.from(Array(50).keys());
    return `
    <div class='container conte-center mt-5'>
      <div class="row" id="paginated-list" data-current-page="1" aria-live="polite">
      ${this.state.items
        .map(
          (item) => `
          <item-card id="${item.id}" 
          image="${item.image}"
          itemtype="${item.itemtype}"
          brand="${item.brand}" 
          ${productCharacteristics
            .map(
              (title) => `
          ${title.name}="${item[`${title.name}`]}"
          `
            )
            .join(" ")} class=" col-3 mb-4" number='${item}'></item-card>
      `
        )
        .join(" ")} 
      </div>

      <div class="row">
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
    </div>
        `;
  }
}

customElements.define("ds-catalog", Catalog);