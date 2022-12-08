import { Component } from "../../../core";
import "./footer.scss";

export class Footer extends Component {
  render() {
    return `
        <div id="footer">

        </div>
        `;
  }
}

customElements.define("it-footer", Footer);
