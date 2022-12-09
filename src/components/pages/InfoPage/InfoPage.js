import { Component } from "../../../core";
import "./InfoPage.scss";

export class InfoPage extends Component {
  componentDidMount() {}
  render() {
    return `
      <h1>Info Page<h1>
      <div class="row">
        <div class="col-12 col-xl-6 mx-auto">
          <div class=" fs-3">
            <h5 class=" fs-2">Оплата и доставка</h5>
            <ul class="">
              <li class="mb-2 mt-2">
                Доставка по Гомельской области 50 копеек км
              </li>
              <li class="mb-2 mt-2">
                Оплату можно производить наличным и безналичным расчётом.
              </li>
            </ul>
          </div>
        </div>
        <div class="col-12 col-xl-6">
          <img src="../../../assets/images/zamer6-1200x900.jpg" alt="D">
        </div>

        </div>
      <div class="row justify-content-between pt-5 pb-lg-5">
      <div class="col-xl-4 fs-2 fw-bolder">
        Наш адрес:
      </div>
      <div class="col-xl-5 fs-3 fst-italic text-end">
      г. Гомель, Улица Каменщикова 3<br> (2-я галерея 53 место)<br>
      Dvery@tut.by
      </div>
    </div>
      <div class="row">
        <iframe class="col" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d722.6298113845755!2d31.02011674980396!3d52.46777741437265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46d46937760db291%3A0x1055e014ecc0b70!2z0J_RgNGD0LTQutC-0LLRgdC60LjQuSDRgNGL0L3QvtC6!5e0!3m2!1sru!2sby!4v1670536638322!5m2!1sru!2sby" width="1280" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    `;
  }
}

customElements.define("info-page", InfoPage);
