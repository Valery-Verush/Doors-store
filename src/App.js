import * as core from "./core";
import "./components";
import { appRoutes } from "./constants/appRoutes";

export class App extends core.Component {
  render() {
    return `
      <div >
        <ds-router>
          <ds-header></ds-header>
              <main class="container-xl" >
                <ds-route path="${appRoutes.home}" component="home-page" title="Межкомнатные двери"></ds-route>
                <ds-route path="${appRoutes.catalog}" component="catalog-page" title="Каталог"></ds-route>
                <ds-route path="${appRoutes.info}" component="info-page" title="О нас"></ds-route>
                <ds-route path="${appRoutes.basket}" component="basket-page" title="Корзина"></ds-route>
                <ds-route path="${appRoutes.admin}" component="admin-page" title="Admin Page"></ds-route>
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
