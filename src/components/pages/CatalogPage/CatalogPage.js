import { Component } from "../../../core";

export class CatalogPage extends Component {
  render() {
    return `<ds-catalog></ds-catalog>`;
  }
}

customElements.define("catalog-page", CatalogPage);
