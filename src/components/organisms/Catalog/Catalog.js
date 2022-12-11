import { Component } from "../../../core";
import "./Catalog.scss";

export class Catalog extends Component {
  paginator() {
    const paginationNumbers = document.getElementById("pagination-numbers");
    const paginatedList = document.getElementById("paginated-list");
    const listItems = paginatedList.querySelectorAll("item-card");
    const nextButton = document.getElementById("next-button");
    const prevButton = document.getElementById("prev-button");

    const paginationLimit = 12;
    const pageCount = Math.ceil(listItems.length / paginationLimit);
    let currentPage = 1;

    const disableButton = (button) => {
      button.classList.add("disabled");
      button.setAttribute("disabled", true);
    };

    const enableButton = (button) => {
      button.classList.remove("disabled");
      button.removeAttribute("disabled");
    };

    const handlePageButtonsStatus = () => {
      if (currentPage === 1) {
        disableButton(prevButton);
      } else {
        enableButton(prevButton);
      }

      if (pageCount === currentPage) {
        disableButton(nextButton);
      } else {
        enableButton(nextButton);
      }
    };

    const handleActivePageNumber = () => {
      document.querySelectorAll(".pagination-number").forEach((button) => {
        button.classList.remove("active");
        const pageIndex = Number(button.getAttribute("page-index"));
        if (pageIndex == currentPage) {
          button.classList.add("active");
        }
      });
    };

    const appendPageNumber = (index) => {
      const pageNumber = document.createElement("button");
      pageNumber.className = "pagination-number";
      pageNumber.innerHTML = index;
      pageNumber.setAttribute("page-index", index);
      pageNumber.setAttribute("aria-label", "Page " + index);

      paginationNumbers.appendChild(pageNumber);
    };

    const getPaginationNumbers = () => {
      for (let i = 1; i <= pageCount; i++) {
        appendPageNumber(i);
      }
    };

    const setCurrentPage = (pageNum) => {
      currentPage = pageNum;

      handleActivePageNumber();
      handlePageButtonsStatus();

      const prevRange = (pageNum - 1) * paginationLimit;
      const currRange = pageNum * paginationLimit;

      listItems.forEach((item, index) => {
        item.classList.add("hidden");
        if (index >= prevRange && index < currRange) {
          item.classList.remove("hidden");
        }
      });
    };

    window.addEventListener("load", () => {
      getPaginationNumbers();
      setCurrentPage(1);

      prevButton.addEventListener("click", () => {
        setCurrentPage(currentPage - 1);
      });

      nextButton.addEventListener("click", () => {
        setCurrentPage(currentPage + 1);
      });

      document.querySelectorAll(".pagination-number").forEach((button) => {
        const pageIndex = Number(button.getAttribute("page-index"));

        if (pageIndex) {
          button.addEventListener("click", () => {
            setCurrentPage(pageIndex);
          });
        }
      });
    });
  }

  componentDidMount() {
    this.paginator();
  }

  render() {
    let arr = Array.from(Array(50).keys());
    return `
    <div class='container conte-center mt-5'>
      <div class="row" id="paginated-list" data-current-page="1" aria-live="polite">
      ${arr
        .map(
          (item) => `
          <item-card class=" col-3 mb-4" number='${item}'></item-card>
      `
        )
        .join(" ")} 
      </div>

      <div class="row">
        <div class="col align-self-center mt-5">
          <nav class="pagination-container ">
            <button class="pagination-button" id="prev-button" aria-label="Previous page" title="Previous page">
              &lt;
            </button>
        
            <div id="pagination-numbers">
        
            </div>
        
            <button class="pagination-button" id="next-button" aria-label="Next page" title="Next page">
              &gt;
            </button>
          </nav>
        </div>
      </div>
    </div>
        `;
  }
}

customElements.define("ds-catalog", Catalog);
