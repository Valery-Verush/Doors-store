import { Component } from "../Component";

export class Link extends Component {
  constructor() {
    super();
    this.isShadow = true;
  }

  static get observedAttributes() {
    return ["to", "classlink", "stylelink"];
  }

  onClick = (evt) => {
    evt.preventDefault();
    this.dispatch("change-route", { target: this.props.to });
  };

  componentDidMount() {
    this.addEventListener("click", this.onClick);
  }

  componentWillUnmount() {
    this.removeEventListener("click", this.onClick);
  }

  render() {
    return `
            <a class="${this.props.classlink}" style="${this.props.stylelink}" href="${this.props.to}">
                <slot></slot>
            </a>
        `;
  }
}

customElements.define("ds-link", Link);
