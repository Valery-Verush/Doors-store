import { Component } from "../../../core";

export class HomePage extends Component {
  render() {
    return `<ds-catalog></ds-catalog>`;
  }
}

customElements.define("home-page", HomePage);
