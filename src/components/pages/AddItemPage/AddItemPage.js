import { Component } from "../../../core";
import { addItemService } from "../../../services/AddItemService";
import { authService } from "../../../services/Auth";
import { appRoutes } from "../../../constants/appRoutes";
export class AddItemPage extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      isLoading: false,
    };
  }

  saveItem = (evt) => {
    addItemService.createItem({ ...evt.detail }).then(() => {});
  };

  updateItem = ({ detail }) => {
    addItemService
      .updateItem(detail.id, {
        image: detail.image,
        itemtype: detail.itemtype,
        brand: detail.brand,
        glass: detail.glass,
        itemheight: detail.itemheight,
        itemwidth: detail.itemwidth,
        itemthickness: detail.itemthickness,
        material: detail.material,
        color: detail.color,
        series: detail.series,
        price: detail.price,
      })
      .then(() => {});
  };

  componentDidMount() {
    if (!authService.user) {
      this.dispatch("change-route", {
        target: appRoutes[this.props.path ?? "signUp"],
      });
    }
    this.addEventListener("save-item", this.saveItem);
    this.addEventListener("edit-item", this.updateItem);
    this.addEventListener("click", this.onClick);
  }

  componentWillUnmount() {
    this.removeEventListener("save-item", this.saveItem);
    this.removeEventListener("edit-item", this.updateItem);
    this.removeEventListener("click", this.onClick);
  }

  render() {
    return `
            <div class='container mt-5'>
              <my-input-group type="save-item"></my-input-group>
            </div>
            `;
  }
}

customElements.define("add-item-page", AddItemPage);
