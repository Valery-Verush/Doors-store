import { Component } from "../../../core";
import { addItemService } from "../../../services/AddItemService";
import { authService } from "../../../services/Auth";
import { appRoutes } from "../../../constants/appRoutes";
import * as utils from "../../../utils";
import { storageService } from "../../../services/Storage";
export class AddItemPage extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      isLoading: false,
    };
  }

  saveItem = (data) => {
    utils.toggleIsLoading(this);
    storageService
      .uploadImg(data.detail.image)
      .then((snapshot) => {
        storageService.getDownloadURL(snapshot.ref).then((url) => {
          addItemService
            .createItem({
              ...data.detail,
              image: url,
            })
            .catch((error) => {
              console.log(error);
            });
        });
      })
      .finally(() => {
        utils.toggleIsLoading(this);
      });
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
  }

  componentWillUnmount() {
    this.removeEventListener("save-item", this.saveItem);
    this.removeEventListener("edit-item", this.updateItem);
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
