import { Component, eventBus } from "../../../core";
import { addOrderService } from "../../../services/AddOrderService";
import * as utils from "../../../utils";
import { appEvents, productCharacteristics } from "../../../constants";
import { databaseService } from "../../../services";

export class AdminPage extends Component {
  constructor() {
    super();
    this.state = {
      orderData: [],
      isLoading: false,
    };
  }

  componentDidMount() {
    this.getOrders();
    eventBus.on(appEvents.changeOrderList, this.getOrders);
  }

  componentWillUnmount() {
    eventBus.off(appEvents.changeOrderList, this.getOrders);
  }

  getOrders = () => {
    utils.toggleIsLoading(this);
    addOrderService
      .getOrder()
      .then((orderItem) => {
        databaseService.read("items").then((data) => {
          this.setState((state) => {
            return {
              ...state,
              orderData: orderItem.map((item) => {
                return {
                  ...item,
                  order: item.order.map((essence) => {
                    return {
                      ...essence,
                      ...data.find((smth) => {
                        return smth.id === essence.id;
                      }),
                    };
                  }),
                };
              }),
            };
          });
        });
      })
      .finally(() => {
        utils.toggleIsLoading(this);
      });
  };

  render() {
    return this.state.isLoading
      ? `<ds-preloader is-loading="${this.state.isLoading}"></ds-preloader>`
      : `${
          this.state.orderData?.[0]
            ? `
    <div class='container conte-center mt-5'>
      <div class="row paginated-list" id="paginated-list" data-current-page="1" aria-live="polite">
      ${this.state.orderData
        .map(
          (item) => `
          <order-card 
          id="${item.id}" 
          name="${item.name}" 
          email="${item.email}"
          phone="${item.phone}"
          items='${JSON.stringify(
            item.order
          )}' class="col-12 mb-4 item-card" '></order-card>
      `
        )
        .join(" ")} 
      </div>
      `
            : `
      <h2 class='fs-2 mt-5  text-center p-6 '>Заказов сейчас нет. </h2>
      `
        }`;
  }
}

customElements.define("admin-page", AdminPage);
