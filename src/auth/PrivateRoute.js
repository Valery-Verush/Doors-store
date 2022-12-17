import { Component, eventBus } from "../core";
import { authService } from "../services/Auth";
import { appRoutes } from "../constants/appRoutes";
import { appEvents } from "../constants/appEvents";

export class PrivateRoute extends Component {
  static get observedAttributes() {
    return ["path", "component", "title"];
  }

  componentDidMount() {
    console.log(authService.user, this.props.path === window.location.pathname);
    if (!authService.user && this.props.path === window.location.pathname) {
      eventBus.emit(appEvents.changeRoute, {
        target: appRoutes.signIn,
      });
    }
  }

  render() {
    return `<ds-route 
      path="${this.props.path}" 
      component="${this.props.component}" 
      title="${this.props.title}"></ds-route>`;
  }
}

customElements.define("private-route", PrivateRoute);
