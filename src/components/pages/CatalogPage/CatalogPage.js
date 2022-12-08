import { Component } from "../../../core";

export class CatalogPage extends Component {
  render() {
    return `<h1>catalog Page<h1>`;
  }
}

customElements.define("catalog-page", CatalogPage);
