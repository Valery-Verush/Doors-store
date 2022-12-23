import { Component, eventBus } from "../../../core";
import { appEvents, productCharacteristics } from "../../../constants";
import { appRoutes } from "../../../constants";
import { addOrderService } from "../../../services/AddOrderService";

export class orderCard extends Component {
  constructor() {
    super();
    this.state = {
      orderItems: [],
      calculateCost: null,
    };
  }
  static get observedAttributes() {
    return ["name", "phone", "email", "items"];
  }

  confirmOrder(evt) {
    if (evt.target.closest(".order-confirm")) {
      addOrderService.deleteOrder(this.props.id);
      eventBus.emit(appEvents.changeOrderList);
    }
  }

  getOrderItems() {
    this.setState((state) => {
      return {
        ...state,
        orderItems: JSON.parse(this.props.items),
      };
    });
    this.setState((state) => {
      return {
        ...state,
        calculateCost: this.state.orderItems.reduce(
          (acum, item) => acum + item.price * item.quantity,
          0
        ),
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
          <div class="card shadow-sm pt-4" >
            <div class='container row '>
                <div class="col-xl-4 fs-5 mb-4 ps-4">
                  <div >Имя: ${this.props.name}</div>
                  <div >Телефон: ${this.props.phone}</div>
                  <div >Адрес: ${this.props.email}</div>
                  <div class=' fw-bold '>Итоговая стоимость: ${
                    this.state.calculateCost
                  } br</div>
                </div>
                <div class="col-12 col-xl-8">
                  <div class='container row text-bold fw-bold  text-center'>
                    <div class="col-4 border ">Производитель</div>
                    <div class="col-4 border ">Цвет</div>
                    <div class="col-2 border ">Цена</div>
                    <div class="col-2 border fs-6 fs-xl-5">Кол-во</div>
                  </div>
                  ${this.state.orderItems
                    ?.map(
                      (item) => `
                      <div class='container row text-center'>
                      <div class="col-4 border">${item.brand}</div>
                      <div class="col-4 border">${item.color}</div>
                      <div class="col-2 border">${item.price}</div>
                      <div class="col-2 border">${item.quantity}</div>
                      </div>`
                    )
                    .join(" ")}
                </div>
            </div>
            <div class="d-grid gap-2 mt-3 col-10 col-md-6 mb-3 mx-auto">
              <button type="submit" class="btn btn-outline-warning order-confirm color-gradient ">Потвердить</button>
            </div>
          </div>
          `;
  }
}

customElements.define("order-card", orderCard);
