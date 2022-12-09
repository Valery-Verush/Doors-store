import { appRoutes } from "../../../constants/appRoutes";
import * as core from "../../../core";
import "./header.scss";

export class Header extends core.Component {
  render() {
    return `
  <header>
    <nav class="navbar navbar-expand-lg bg-warning bg-gradient shadow-sm sticky-top mb-4">
      <div class="container-xl">
        <ul class="navbar-nav flex-row ">
        <li class="nav-item col-lg-auto">
          <ds-link classlink="" stylelink="text-decoration: none"  to="${appRoutes.home}">
              <img src="../../../assets/images/icons/logo/room-door-svgrepo-com.svg" alt="D" width="60" height="60"> 
          </ds-link>
        </li>
        <li class="nav-item active col-lg-auto">
          <ds-link classlink="" stylelink="text-decoration: none"  to="${appRoutes.home}">
            <span class="nav-link text-light text-outline-danger fs-3"> 
              Межкомнатные двери
            </span>
          </ds-link>
        </li>
        <li class="nav-item col-lg-auto">
            <ds-link classlink="" stylelink="text-decoration: none" to="${appRoutes.catalog}">
              <span class="nav-link text-light  fs-5 mt-2 ms-5">
                Каталог
              </span>
            </ds-link>
          </li>
          <li class="nav-item col-lg-auto">
            <ds-link classlink="" stylelink="text-decoration: none" to="${appRoutes.info}">
              <span class="nav-link text-light  fs-5 mt-2 ms-2">
                О нас
              </span>
            </ds-link>
          </li>
        </ul>
        <ul class="navbar-nav flex-row">
          <li class="nav-item col-lg-auto me-5">
            <a class="nav-link text-light  fs-5 ms-1 " href="tel: +375296270513">+375 (29) 627-05-13</a>
          </li>
          <li class="nav-item col-lg-auto">
              <ds-link classlink="" stylelink="text-decoration: none" to="${appRoutes.basket}">
                  <span >
                    <img src="../../../assets/images/icons/logo/shopping-cart-svgrepo-com.svg" alt="D" width="40" height="50"> 
                  </span>
              </ds-link>
          </li> 
        </ul>
      </div>
    </nav>
  <header>
       
        `;
  }
}

customElements.define("ds-header", Header);
