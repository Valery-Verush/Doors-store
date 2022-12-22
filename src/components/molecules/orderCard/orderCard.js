import { Component, eventBus } from "../../../core";
import { appEvents, productCharacteristics } from "../../../constants";
import { appRoutes } from "../../../constants";
import { addOrderService } from "../../../services/AddOrderService";

export class orderCard extends Component {
  static get observedAttributes() {
    return ["name", "phone", "email", "items"];
  }

  confirmOrder(evt) {
    if (evt.target.closest(".order-confirm")) {
      addOrderService.deleteOrder(this.props.id);
      this.getOrderItems();
    }
  }

  getOrderItems() {
    this.setState((state) => {
      return {
        ...state,
        orderItems: JSON.parse(this.props.items),
      };
    });
  }

  componentDidMount() {
    this.getOrderItems();
    this.addEventListener("click", this.confirmOrder);
  }

  componentWillUnmount() {
    this.removeEventListener("click", this.confirmOrder);
  }

  render() {
    return `
          <div class="card shadow-sm " >
            <div class='container row '>
                <div class="col-5">
                  <div >${this.props.name}</div>
                  <div >${this.props.phone}</div>
                  <div >${this.props.email}</div>
                </div>
                <div class="col-7">
                  ${this.state.orderItems
                    ?.map(
                      (item) => `
                      <div class='container row '>
                      <div class="col-5">${item.brand}</div>
                      <div class="col-3">${item.color}</div>
                      <div class="col-3">${item.quantity}</div>
                      </div>`
                    )
                    .join(" ")}
                </div>
            </div>
            <div class="d-grid gap-2 mt-5 col-md-6 mb-3 mx-auto">
              <button type="submit" class="btn btn-outline-warning order-confirm color-gradient ">Просмотренно</button>
            </div>
          </div>
              `;
  }
}

customElements.define("order-card", orderCard);
