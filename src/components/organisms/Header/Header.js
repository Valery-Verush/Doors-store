import { appRoutes } from "../../../constants/appRoutes";
import * as core from "../../../core";
import "./header.scss";

export class Header extends core.Component {
  render() {
    return `
    <nav class="navbar navbar-expand-lg bg-warning bg-gradient shadow-sm">
      <div class="container-xl">
        <ul class="navbar-nav flex-row">
        <li class="nav-item col-lg-auto">
          <ds-link classlink="" stylelink="text-decoration: none"  to="${appRoutes.home}">
              <img src="../../../assets/images/icons/logo/room-door-svgrepo-com.svg" alt="D" width="60" height="60"> 
          </ds-link>
        </li>
        <li class="nav-item active col-lg-auto">
          <ds-link classlink="" stylelink="text-decoration: none"  to="${appRoutes.home}">
            <span class="nav-link text-light  fs-3"> 
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
          <li class="nav-item col-lg-auto">
              <ds-link classlink="" stylelink="text-decoration: none" to="${appRoutes.basket}">
                  <span class="nav-link text-light  fs-5 ">
                    <img src="../../../assets/images/icons/logo/shopping-cart-svgrepo-com.svg" alt="D" width="40" height="50"> 
                  </span>
              </ds-link>
          </li> 
        </ul>
      </div>
    </nav>
       
        `;
  }
}

customElements.define("ds-header", Header);
