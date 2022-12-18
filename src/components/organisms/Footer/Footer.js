import { Component } from "../../../core";
import { appRoutes } from "../../../constants/appRoutes";
import "./footer.scss";

export class Footer extends Component {
  render() {
    return `
    <footer class="bd-footer py-4 py-md-5 mt-5 bg-white bg-gradient shadow-sm">
    <div class="container py-4 py-md-5 px-4 px-md-3">
      <div class="row text-center">
        <div class="col-12 col-lg-3 mb-3 align-items-center">
          <a class="d-inline-flex align-items-center mb-2 link-dark text-decoration-none footer-brand" href="/" aria-label="Bootstrap">
          <img src="../../../assets/images/icons/logo/room-door-svgrepo-com.svg" alt="D" width="60" height="60">            
          <span class="fs-5 ms-2">Межкомнатные двери</span>
          </a>
          
        </div>
        <div class="col-6 col-lg-2 fs-5 mb-3">
          <h5 class=" fs-4 ">Ссылки</h5>
          <ul class="list-unstyled">
            <li class="mb-2 mt-2">
              <ds-link  to="${appRoutes.catalog}">
                  Каталог
              </ds-link>
            </li>
            <li class="mb-2 mt-2">
              <ds-link  to="${appRoutes.info}">
                  О нас
              </ds-link>
            </li>
            <li class="mb-2 mt-2">
              <ds-link  to="${appRoutes.basket}">
                  Корзина
              </ds-link>
            </li>
            <li class="mb-2 mt-2">
              <ds-link  to="${appRoutes.signIn}">
                  Войти в систему
              </ds-link>
            </li>
          </ul>
        </div>
        <div class="col-6 col-lg-2 mb-3 fs-5">
          <h5 class=" fs-4 ">Время работы</h5>
          <ul class="list-unstyled">
            <li class="mb-2 mt-2">
              Вт-Пт с 09:00  до 16:00
            </li>
            <li class="mb-2 mt-2">
              Сб-Вс с 09:00 до 15:00
            </li>
          </ul>
        </div>
        <div class="col-6 col-lg-2 fs-5">
          <h5 class=" fs-4 ">Соц. сети</h5>
          <ul class="row  px-xl-0 m-2 m-xl-4 text-center">
          <li class="col-12 col-xl-4  ">
            <a href="#"  >
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" id="" class="social__icon svg replaced-svg" viewBox="0 0 294 284"><path d="M277.427 70.924l-.084-.338c-6.84-27.653-37.678-57.325-65.998-63.498l-.319-.066c-45.806-8.738-92.251-8.738-138.047 0l-.33.066C44.34 13.261 13.502 42.935 6.653 70.586l-.076.338c-8.456 38.617-8.456 77.781 0 116.398l.076.338c6.558 26.472 35.099 54.782 62.362 62.567v30.868c0 11.173 13.615 16.66 21.357 8.597l31.275-32.509c6.784.379 13.571.591 20.356.591 23.057 0 46.125-2.181 69.023-6.549l.319-.066c28.32-6.173 59.158-35.847 65.998-63.498l.084-.338c8.456-38.618 8.456-77.78.001-116.399zm-24.751 110.799c-4.567 18.041-27.981 40.469-46.585 44.613-24.355 4.632-48.904 6.611-73.428 5.932a1.732 1.732 0 00-1.296.526c-3.481 3.572-22.835 23.442-22.835 23.442l-24.288 24.928c-1.776 1.852-4.896.591-4.896-1.964v-51.136c0-.845-.603-1.562-1.433-1.726l-.014-.003c-18.604-4.144-42.01-26.572-46.585-44.613-7.611-34.906-7.611-70.292 0-105.198C35.89 58.483 59.296 36.055 77.9 31.911c42.536-8.09 85.664-8.09 128.191 0 18.613 4.144 42.018 26.572 46.585 44.613 7.619 34.907 7.619 70.293-.001 105.199z"></path><path d="M182.47 205.327c-2.86-.869-5.585-1.452-8.118-2.501-26.231-10.883-50.371-24.923-69.492-46.444-10.874-12.238-19.385-26.055-26.58-40.677-3.411-6.934-6.286-14.139-9.217-21.3-2.672-6.527 1.264-13.271 5.408-18.191 3.889-4.617 8.894-8.15 14.314-10.754 4.23-2.032 8.402-.86 11.492 2.725 6.678 7.752 12.814 15.9 17.78 24.886 3.055 5.527 2.217 12.283-3.32 16.044-1.346.914-2.572 1.988-3.825 3.02-1.1.905-2.134 1.819-2.888 3.044-1.377 2.241-1.443 4.886-.557 7.323 6.827 18.761 18.334 33.351 37.219 41.21 3.022 1.257 6.056 2.72 9.538 2.315 5.83-.681 7.718-7.077 11.804-10.418 3.993-3.265 9.097-3.308 13.398-.586 4.303 2.724 8.473 5.646 12.619 8.601 4.07 2.9 8.121 5.735 11.874 9.042 3.61 3.179 4.853 7.349 2.82 11.662-3.72 7.901-9.135 14.472-16.944 18.668-2.205 1.182-4.839 1.565-7.325 2.331 2.486-.766-2.86-.869 0 0zM142.071 56.426c34.309.962 62.49 23.73 68.529 57.651 1.029 5.78 1.395 11.688 1.853 17.555.193 2.467-1.205 4.811-3.867 4.844-2.75.033-3.987-2.269-4.167-4.734-.353-4.882-.598-9.787-1.271-14.627-3.551-25.56-23.931-46.704-49.371-51.241-3.829-.683-7.745-.862-11.624-1.27-2.451-.256-5.661-.404-6.204-3.452-.455-2.555 1.701-4.59 4.134-4.72.659-.04 1.324-.008 1.988-.006-.664-.002 34.311.962 0 0z"></path><path d="M194.212 124.019c-.057.429-.086 1.436-.338 2.384-.91 3.444-6.134 3.875-7.335.4-.357-1.031-.41-2.205-.412-3.315-.012-7.266-1.591-14.526-5.256-20.849-3.767-6.5-9.523-11.96-16.272-15.267-4.082-1.998-8.495-3.241-12.969-3.98-1.955-.324-3.931-.52-5.896-.793-2.381-.331-3.653-1.848-3.539-4.194.105-2.198 1.712-3.781 4.108-3.644 7.873.446 15.479 2.15 22.48 5.856 14.234 7.539 22.366 19.437 24.74 35.326.107.721.279 1.433.334 2.155.134 1.782.219 3.567.355 5.921-.136-2.354-.057.427 0 0z"></path><path d="M172.872 123.188c-2.87.052-4.406-1.538-4.703-4.168-.205-1.834-.369-3.694-.807-5.48-.862-3.517-2.731-6.775-5.689-8.93-1.396-1.017-2.979-1.758-4.636-2.238-2.105-.609-4.293-.441-6.392-.955-2.281-.559-3.543-2.407-3.184-4.546.326-1.948 2.22-3.468 4.349-3.313 13.302.96 22.809 7.837 24.166 23.497.097 1.105.209 2.272-.036 3.331-.422 1.807-1.762 2.714-3.068 2.802 1.306-.088-2.871.051 0 0z" fill="#fff"></path></svg>
            </a>
          </li>
          <li class=" col-12 col-xl-4 ">
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" id="" class="social__icon svg replaced-svg" viewBox="0 0 28 28"><g clip-path="url(#clip0_543_5957)"><path d="M27.136 3.204c-.33-.404-.824-.626-1.391-.626a2.73 2.73 0 00-.97.193L1.918 11.496c-1.213.463-1.376 1.157-1.366 1.53.01.373.213 1.057 1.45 1.45a.618.618 0 00.023.007l4.74 1.357 2.564 7.332c.35.999 1.135 1.62 2.048 1.62.577 0 1.143-.242 1.64-.698l2.932-2.7 4.253 3.425h.001l.04.033.012.01c.473.366.989.56 1.493.56.985 0 1.769-.73 1.998-1.858l3.744-18.49c.15-.742.024-1.407-.355-1.87zM8.353 15.582l9.146-4.672-5.695 6.051a.79.79 0 00-.192.353l-1.098 4.448-2.161-6.18zm3.592 7.348a1.493 1.493 0 01-.114.095l1.02-4.127 1.852 1.493-2.758 2.54zM25.941 4.76l-3.745 18.49c-.036.178-.151.59-.447.59-.146 0-.33-.08-.518-.225l-4.82-3.88-.002-.002-2.868-2.31 8.236-8.75a.791.791 0 00-.936-1.247l-13.545 6.92L2.49 12.97l22.848-8.72a1.16 1.16 0 01.407-.089c.048 0 .134.006.166.045.042.052.096.226.03.555z"></path></g><defs><clipPath id="clip0_543_5957"><path transform="translate(.553 .5)" d="M0 0h27v27H0z"></path></clipPath></defs></svg>
            </a>
          </li>
          <li class=" col-12 col-xl-4">
            <a href="#" >
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" id="" class="social__icon svg replaced-svg" viewBox="0 0 18 18"><path d="M6.084 9a2.917 2.917 0 115.833 0 2.917 2.917 0 01-5.833 0zM4.507 9a4.493 4.493 0 108.986 0 4.493 4.493 0 00-8.986 0zm8.114-4.671a1.05 1.05 0 101.05-1.05 1.05 1.05 0 00-1.05 1.05zM5.465 16.122c-.853-.039-1.316-.18-1.624-.3a2.72 2.72 0 01-1.007-.655 2.699 2.699 0 01-.654-1.006c-.12-.308-.263-.772-.301-1.625-.043-.922-.051-1.2-.051-3.536 0-2.337.009-2.613.05-3.536.04-.853.183-1.316.302-1.625.159-.408.348-.7.654-1.006a2.697 2.697 0 011.007-.655c.308-.12.771-.262 1.624-.3.923-.043 1.2-.052 3.535-.052 2.336 0 2.613.01 3.537.051.853.039 1.315.182 1.624.301.409.158.7.349 1.007.655.306.306.495.598.654 1.006.12.308.263.772.301 1.625.043.923.051 1.2.051 3.536 0 2.337-.008 2.613-.05 3.536-.04.853-.182 1.317-.302 1.625-.159.409-.348.7-.654 1.006a2.718 2.718 0 01-1.007.654c-.308.12-.771.263-1.624.301-.923.043-1.2.051-3.537.051-2.336 0-2.612-.008-3.535-.05zM5.393.303c-.931.042-1.568.19-2.124.406a4.292 4.292 0 00-1.55 1.01 4.275 4.275 0 00-1.01 1.55C.495 3.825.347 4.46.304 5.393.26 6.326.25 6.623.25 9c0 2.376.01 2.675.053 3.607.043.932.19 1.568.407 2.124a4.277 4.277 0 001.01 1.55c.486.486.973.786 1.55 1.01.556.216 1.192.364 2.123.406.933.042 1.231.053 3.607.053 2.377 0 2.675-.01 3.608-.053.931-.042 1.568-.19 2.124-.406a4.304 4.304 0 001.55-1.01 4.286 4.286 0 001.01-1.55c.215-.556.364-1.192.405-2.123.043-.934.053-1.232.053-3.608 0-2.376-.01-2.674-.052-3.607-.043-.932-.19-1.568-.407-2.124a4.303 4.303 0 00-1.01-1.55 4.282 4.282 0 00-1.548-1.01c-.557-.216-1.194-.364-2.124-.406C11.676.261 11.377.25 9 .25c-2.376 0-2.675.01-3.608.053z"></path></svg>
            </a>
          </li>
          </ul>
        </div>
        <div class="col-6 col-lg-3 mb-3 fs-5">
          <h5 class=" fs-4 ">Контакты</h5>
          <ul class="list-unstyled">
            <li class="mb-2 mt-2">
              <a class="  fs-5 ms-1 " href="tel: +375296270513">+375 (29) 627-05-13</a>
            </li>
            <li class="mb-2 mt-2">
              <a class=" fs-5 ms-1 " href="#">Dvery@tut.by</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
        `;
  }
}

customElements.define("ds-footer", Footer);
