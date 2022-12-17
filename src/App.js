import * as core from "./core";
import "./components";
import { appRoutes } from "./constants/appRoutes";
import { authService } from "./services";
import * as utils from "./utils";
import "./auth";
import { appEvents } from "./constants/appEvents";

export class App extends core.Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      isLogged: false,
      error: "",
    };
  }

  getUser() {
    utils.toggleIsLoading(this);
    authService
      .init()
      .then((user) => {
        authService.user = user;
        this.setState((state) => {
          return {
            ...state,
            isLogged: Boolean(user),
          };
        });
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
        utils.toggleIsLoading(this);
      });
  }

  onSignOut = () => {
    utils.toggleIsLoading(this);
    authService
      .signOut()
      .then(() => {
        this.setState((state) => {
          return {
            ...state,
            isLogged: false,
          };
        });
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
        utils.toggleIsLoading(this);
      });
  };

  setIsAuthorized = () => {
    this.setState((state) => {
      return {
        ...state,
        isLogged: true,
      };
    });
  };

  componentDidMount() {
    this.getUser();
    core.eventBus.on(appEvents.userAuthorized, this.setIsAuthorized);
    core.eventBus.on(appEvents.userLoggedOut, this.onSignOut);
  }

  componentWillUnmount() {
    core.eventBus.off(appEvents.userAuthorized, this.setIsAuthorized);
    core.eventBus.off(appEvents.userLoggedOut, this.onSignOut);
  }

  render() {
    return this.state.isLoading
      ? `<ds-preloader is-loading="${this.state.isLoading}"></ds-preloader>`
      : `
    
      <div class='bg-light bg-gradient'>
        <ds-router>
          <ds-header is-logged="${this.state.isLogged}"></ds-header>
              <main class="container-xl " >
                <ds-route path="${appRoutes.signIn}" component="sign-in-page" title="Войти в систему"></ds-route>
                <private-route path="${appRoutes.addItem}" component="add-item-page" title="Добавить товар"></private-route>
                <ds-route path="${appRoutes.home}" component="home-page" title="Межкомнатные двери"></ds-route>
                <ds-route path="${appRoutes.catalog}" is-logged="${this.state.isLogged}" component="catalog-page" title="Каталог"></ds-route>
                <ds-route path="${appRoutes.info}" component="info-page" title="Оплата и доставка"></ds-route>
                <ds-route path="${appRoutes.basket}" component="basket-page" title="Корзина"></ds-route>
                <ds-route path="${appRoutes.productPage}/:id" component="product-page" title="id"></ds-route>
                <private-route path="${appRoutes.admin}" is-logged="${this.state.isLogged}" component="admin-page" title="Admin Page"></private-route>
                <ds-route path="${appRoutes.errorPage}" component="error-page" title="Not Found Page"></ds-route>
                <ds-outlet></ds-outlet>
              </main>
            <ds-footer></ds-footer>
          </ds-router>
      </div>
      `;
  }
}

customElements.define("my-app", App);

{
  /* <ds-route path="${appRoutes.signIn}" component="sign-in-page" title="SignIn Page"></ds-route>
<ds-route path="${appRoutes.signUp}" component="sign-up-page" title="SignUp Page"></ds-route> */
}
