import { Component } from "../../../core";
import "./error.scss";
import { appRoutes } from "../../../constants";
export class ErrorPage extends Component {
  componentDidMount() {}
  render() {
    return `
    <div id="notfound">
      <div class="notfound">
        <div class="notfound-404">
          <h1>4<span></span>4</h1>
        </div>
        <h2>Oops! Страница не найдена</h2>
        <p>Извините, но страница, которую вы ищете, не существует, была удалена. имя изменено или временно недоступно</p>
        <ds-link  stylelink="text-decoration: none"  to="${appRoutes.home}">
          <a href="#">Вернуться на главную страницу</a>
        </ds-link>
        
      </div>
    </div>
   `;
  }
}

customElements.define("error-page", ErrorPage);
