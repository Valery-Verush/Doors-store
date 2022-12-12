import { Component } from "../../../core";
import "./inputGroup.scss";
import { productCharacteristics } from "../../../constants";

export class InputGroup extends Component {
  onSubmit = (evt) => {
    evt.preventDefault();
    const item = {};
    const data = new FormData(evt.target);
    if (this.props.itemid) {
      data.append("id", this.props.itemid);
    }
    data.forEach((value, key) => {
      item[key] = value;
    });

    this.dispatch(this.props.type, item);
  };

  componentDidMount() {
    this.addEventListener("submit", this.onSubmit);
  }

  componentWillUnmount() {
    this.removeEventListener("submit", this.onSubmit);
  }

  static get observedAttributes() {
    return ["type", "value", "itemid"];
  }

  render() {
    console.log(this.props.type);
    return `
    <form class='input-group row '>
      <div class="col-12 col-xl-8">
        ${productCharacteristics
          .map(
            (item) => `
          <labelclass="form-label text-center">${item.label}</label>
          <input  
            name=${item.name}
            type="text"   
            class=" form-control" 
            value="${this.props[`${item.name}`] ?? `${item.default}`}"
          />
        `
          )
          .join(" ")}

          <labelclass="form-label text-center">Изображение</label>
          <input  
            name="image"
            type="text"   
            class=" form-control" 
            value="${this.props.image ?? ""}"
          />
          <labelclass="form-label text-center">Тип</label>
          <select name="itemtype" class="form-select" >
            <option value="Ekoveneer" ${
              this.props.itemtype === "Ekoveneer" && "selected"
            }>Экошпон</option>
            <option value="Gloss doors" ${
              this.props.itemtype == "Gloss doors" && "selected"
            }>Двери глянцевые </option>
            <option value="Solid doors" ${
              this.props.itemtype == "Solid doors" && "selected"
            }>Двери из массива</option>
            <option value="Veneered doors" ${
              this.props.itemtype == "Veneered doors" && "selected"
            }>Двери шпонированные</option>
            <option value="Painted doors" ${
              this.props.itemtype == "Painted doors" && "selected"
            }>Двери окрашенные (эмаль)</option>
            <option value="MDF doors" ${
              this.props.itemtype == "MDF doors" && "selected"
            }>Двери МДФ</option>
            <option value="Sliding doors" ${
              this.props.itemtype == "Sliding doors" && "selected"
            }>Двери раздвежные</option>
            <option value="Glass doors" ${
              this.props.itemtype == "Glass doors" && "selected"
            }>Двери стеклянные</option>
            <option value="Folding doors" ${
              this.props.itemtype == "Folding doors" && "selected"
            }>Двери складные</option>
          </select>
          </div>
          <div class='col-12 col-xl-4 align-self-center'>
          <div class='container  text-center'>
          <img src="${
            this.props.image ??
            "../../../assets/images/icons/add-picture-svgrepo-com.svg"
          }" class="image-door  align-self-center "  alt="...">
          </div>
          </div>
          <div class="d-grid gap-2 mt-5 col-md-6 mb-3 mx-auto">
            <button 
              type="submit" 
              class=" btn btn btn btn-success"
            >Добавить товар
            </button>
          </div>
          
    </form>
        `;
  }
}

customElements.define("my-input-group", InputGroup);
