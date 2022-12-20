import { Component, eventBus } from "../../../core";
import localStorageService from "../../../services/LocalStorage";
import { appEvents, appRoutes } from "../../../constants";
import { databaseService } from "../../../services";
import * as utils from "../../../utils";
import { FormManager } from "../../../core/FormManager/FormManager";
import { Validator } from "../../../core/FormManager/Validator";
import { initialFieldsState } from "../../../constants/initialState";

export class BassketPage extends Component {
  constructor() {
    super();
    this.state = {
      cartItems: [],
      error: "",
      isLoading: false,
      fields: {
        ...initialFieldsState,
      },
    };
    this.form = new FormManager();
  }

  validateForm = (evt) => {
    if (evt.target.closest("ds-input")) {
      this.form.init(this.querySelector(".registration-form"), {
        email: [
          Validator.email("Email is not valid"),
          Validator.required("The field should not be empty"),
        ],
        phone: [Validator.required("The field should not be empty")],
        name: [Validator.required("The field should not be empty")],
      });
    }
  };

  validate = (evt) => {
    this.setState((state) => {
      return {
        ...state,
        fields: {
          ...state.fields,
          ...evt.detail,
        },
      };
    });
  };

  getProduct = () => {
    utils.toggleIsLoading(this);
    databaseService
      .read("items")
      .then((data) => {
        this.setState((state) => {
          return {
            ...state,
            cartItems: localStorageService.getItem("cart-data").map((item) => {
              return { ...item, ...data.find((smth) => smth.id === item.id) };
            }),
          };
        });
      })
      .finally(() => {
        utils.toggleIsLoading(this);
      });
  };

  makeAnOrder(data) {
    console.log(data);
  }
  componentDidMount() {
    this.getProduct();
    eventBus.on(appEvents.changeCart, this.getProduct);
    this.addEventListener("click", this.validateForm);
    this.addEventListener("validate-controls", this.validate);
    this.addEventListener("submit", this.form.handleSubmit(this.makeAnOrder));
  }

  componentWillUnmount() {
    eventBus.off(appEvents.changeCart, this.getProduct);
  }
  render() {
    const {
      fields: { email, phone, name },
    } = this.state;
    return this.state.isLoading
      ? `<ds-preloader is-loading="${this.state.isLoading}"></ds-preloader>`
      : `
    <h2 class='fs-2 fw-bold text-center p-3'>Корзина</h2>
    ${
      this.state.cartItems?.[0]
        ? `
        ${this.state.cartItems
          .map((item) => {
            return `
            <item-cart-card 
            id='${item.id}' 
            quantity='${item.quantity}'
            image='${item.image}'
            brand='${item.brand}'
            color='${item.color}'
            price='${item.price}'
            ></item-cart-card>
          `;
          })
          .join(" ")}
    
          <div class=' fw-bold fs-4 m-3 text-end'>Итого: ${this.state.cartItems.reduce(
            (acum, item) => acum + item.price * item.quantity,
            0
          )}Br (${this.state.cartItems.reduce(
            (acum, item) => acum + item.quantity,
            0
          )}шт.)</div>
          <form class="mt-5 registration-form">
          <div class="invalid-feedback text-center mb-3 d-block">${
            this.state.error
          }</div>
          <ds-input
            type="name"
            label="Имя"
            control-name="name"
            value="${name.value}"
            is-valid="${name.isValid}"
            is-touched="${name.isTouched}"
            error-message="${name.errors?.message}"
          ></ds-input>

          <ds-input
            type="email"
            label="Почта"
            control-name="email"
            value="${email.value}"
            is-valid="${email.isValid}"
            is-touched="${email.isTouched}"
            error-message="${email.errors?.message}"
          ></ds-input>

          <ds-input
            type="phone" 
            label="Телефон"
            control-name="phone"
            class-name="first-pass"
            value="${phone.value}"
            is-valid="${phone.isValid}"
            is-touched="${phone.isTouched}"
            error-message="${phone.errors?.message}"
          ></ds-input>

          <div class="d-grid gap-2 mt-5 col-md-6 mb-3 mx-auto">
          <button type="submit" class="btn btn-outline-warning  color-gradient ">Сделать заказ</button>
          </div>
          </form>
    `
        : `<h2 class='fs-2   text-center p-6 '>Ваша корзина пока пуста.</h2>
        <ds-link classlink="" stylelink="text-decoration: none" to="${appRoutes.catalog}">
        <h3 class='fs-2   text-center '>Вернуться в магазин</h3>
        </ds-link>`
    }
    `;
  }
}

customElements.define("basket-page", BassketPage);
