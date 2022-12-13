import { Component } from "../../../core";
import "../../molecules";
import "../../atoms";
import { initialFieldsState } from "./initialState";
import { FormManager } from "../../../core/FormManager/FormManager";
import { Validator } from "../../../core/FormManager/Validator";
import { authService } from "../../../services/Auth";
import { appRoutes } from "../../../constants/appRoutes";

export class SignInPage extends Component {
  constructor() {
    super();
    this.state = {
      error: "",
      isLoading: false,
      fields: {
        ...initialFieldsState,
      },
    };

    this.form = new FormManager();
  }

  toggleisLoading = () => {
    this.setState((state) => {
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    });
  };

  signIn = (data) => {
    this.toggleisLoading();
    authService
      .signIn(data.email, data.password)
      .then((user) => {
        authService.user = user;
        this.dispatch("change-route", { target: appRoutes.addItem });
      })
      .catch((error) => {
        this.setState((state) => {
          return {
            ...state,
            error: error.message,
          };
        });
      })
      .finally(() => {
        this.toggleisLoading();
      });
  };

  validateForm = (evt) => {
    if (evt.target.closest("ds-input")) {
      this.form.init(this.querySelector(".registration-form"), {
        email: [
          Validator.email("Email is not valid"),
          Validator.required("The field should not be empty"),
        ],
        password: [Validator.required("The field should not be empty")],
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

  componentDidMount() {
    this.addEventListener("click", this.validateForm);
    this.addEventListener("validate-controls", this.validate);
    this.addEventListener("submit", this.form.handleSubmit(this.signIn));
  }

  render() {
    const {
      fields: { email, password },
    } = this.state;

    return `
      <ds-preloader is-loading="${this.state.isLoading}">
        <form class="mt-5 registration-form">
          <div class="invalid-feedback text-center mb-3 d-block">${this.state.error}</div>
          <ds-input
            type="email"
            label="Email"
            control-name="email"
            value="${email.value}"
            is-valid="${email.isValid}"
            is-touched="${email.isTouched}"
            error-message="${email.errors?.message}"
          ></ds-input>

          <ds-input
            type="password" 
            label="Password"
            control-name="password"
            class-name="first-pass"
            value="${password.value}"
            is-valid="${password.isValid}"
            is-touched="${password.isTouched}"
            error-message="${password.errors?.message}"
          ></ds-input>
          <div class="d-grid gap-2 mt-5 col-md-6 mb-3 mx-auto">
          <button type="submit" class="btn btn-outline-warning  color-gradient ">Войти</button>
          </div>
        </form>
      </ds-preloader>
    `;
  }
}

customElements.define("sign-in-page", SignInPage);
