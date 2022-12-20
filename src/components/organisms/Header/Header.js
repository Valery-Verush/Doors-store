import { appEvents } from "../../../constants";
import { appRoutes } from "../../../constants/appRoutes";
import * as core from "../../../core";
import { eventBus } from "../../../core";
import localStorageService from "../../../services/LocalStorage";
import "./header.scss";

export class Header extends core.Component {
  constructor() {
    super();
    this.state = {
      cartQuantity: 0,
    };
  }
  static get observedAttributes() {
    return ["is-logged"];
  }

  onSignOut = (evt) => {
    evt.preventDefault();
    if (evt.target.closest(".sign-out-link")) {
      eventBus.emit(appEvents.userLoggedOut);
    }
  };

  getCartQuantity = () => {
    const data = localStorageService.getItem("cart-data");
    if (data?.length >= 0) {
      this.setState((state) => {
        return {
          ...state,
          cartQuantity: data.length,
        };
      });
    }
  };

  componentDidMount() {
    this.getCartQuantity();
    eventBus.on(appEvents.changeCart, this.getCartQuantity);
    this.addEventListener("click", this.onSignOut);
  }

  componentWillUnmount() {
    eventBus.off(appEvents.changeCart, this.getCartQuantity);
    this.removeEventListener("click", this.onSignOut);
  }

  render() {
    const mediaQuery = window.matchMedia("(min-width: 1200px)");
    return `
  <header id="header" class="sticky-top ">
    <nav class="navbar navbar-expand-lg bg-warning bg-gradient shadow-sm">
      <div class="container-xl">
        <button class="navbar-toggler rounded-circle p-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <img src="../../../assets/images/icons/logo/room-door-svgrepo-com.svg" alt="D" width="60" height="60"> 
        </button>
        ${
          !mediaQuery.matches
            ? `
          <ds-link class="me-3"  to="${appRoutes.basket}">
            <button type="button" class="btn btn-warning-gradient position-relative rounded-pill">
              <img src="../../../assets/images/icons/logo/shopping-cart-svgrepo-com.svg" class='shoping-card' alt="D" width="40" height="50"> 
              <span class="position-absolute mt-2 top-0 start-100 translate-middle badge rounded-pill bg-danger bg-gradient">${this.state.cartQuantity}</span>
            </button>
          </ds-link>`
            : ""
        }
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        ${
          mediaQuery.matches
            ? `<li class=" visible-xl nav-item col-lg-auto ">
        <ds-link   to="${appRoutes.home}">
            <img src="../../../assets/images/icons/logo/room-door-svgrepo-com.svg" alt="D" width="60" height="60"> 
        </ds-link>
      </li>`
            : ""
        }
        
        <li class="nav-item">
          <ds-link   to="${appRoutes.home}">
            <span class="nav-link text-light text-outline-danger   fs-3 mx-xl-2"> 
              Interior doors
            </span>
          </ds-link>
        </li>
        <li class="nav-item ">
            <ds-link  to="${appRoutes.catalog}">
              <span class="nav-link text-light ms-xl-5  fs-5 m-2">
                Каталог
              </span>
            </ds-link>
          </li>
          <li class="nav-item ">
            <ds-link  to="${appRoutes.info}">
              <span class="nav-link text-light  fs-5 m-2">
                Оплата и доставка
              </span>
            </ds-link>
          </li>
          ${
            JSON.parse(this.props["is-logged"])
              ? `
            <li class="nav-item ">
              <ds-link  to="${appRoutes.addItem}">
                <span class="nav-link text-light  fs-5 m-2">
                  Добавить товар
                </span>
              </ds-link>
            </li>
            <li class="nav-item">
              <ds-link class="sign-out-link" to="${appRoutes.home}">
                <span class="link nav-link text-light  fs-5 m-2">
                  Выйти
                </span>
              </ds-link>
            </li>
          `
              : ""
          }
        </ul>
        </div>
        ${
          mediaQuery.matches
            ? `
          <ds-link  to="${appRoutes.basket}">
            <button type="button" class="btn  btn-warning-gradient position-relative rounded-pill">
              <img src="../../../assets/images/icons/logo/shopping-cart-svgrepo-com.svg" class='shoping-card text-light' alt="D" width="40" height="50"> 
              <span class="position-absolute mt-2 top-0 start-100 translate-middle badge rounded-pill bg-danger bg-gradient">${this.state.cartQuantity}</span>
            </button>
          </ds-link>`
            : ""
        }
      </div>
    </nav>
  <header>
       
        `;
  }
}

customElements.define("ds-header", Header);

{
  /* <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">0</span> */
}
