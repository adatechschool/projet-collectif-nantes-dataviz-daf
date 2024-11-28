// import dictionary from "./data/dictionary.js";
import {
  addHeaderComponent,
  addMainComponent,
  addPaginationComponent,
  addFooterComponent,
} from "./js/Components.js";
import { fetchDataByPageNumber } from "./js/fetchedData.js";
import {
  getHtmlElement,
  displayHtmlElementContent,
  createNavLinks,
  getAllHtmlElements
} from "./js/domManipulation.js";

const HEADER = addHeaderComponent();
const MAIN = addMainComponent();
const PAGINATION = addPaginationComponent();
const FOOTER = addFooterComponent();

document.addEventListener("DOMContentLoaded", () => {
  const WEBSITE = getHtmlElement("#Website");

  displayHtmlElementContent(
    WEBSITE,
    `
    ${HEADER}    
    ${MAIN}
    ${PAGINATION}
    ${FOOTER}
  `,
  );

  let pageNumber = 1;
  fetchDataByPageNumber(pageNumber).then((data) => {
    const navList = getHtmlElement("#nav-list");

    createNavLinks(navList);

    const BUTTONS_NAV_HTML = getAllHtmlElements(".nav-link");

    BUTTONS_NAV_HTML.forEach((button) => {
      button.addEventListener("click", () => {
        const MAIN = document.querySelector("main");
        displayHtmlElementContent(
          MAIN,
          `
          <p>${button.textContent}</p>
          `,
        );
      });
    });

    const LOGO = document.querySelector("#logo-recherche button");
    const htmlMain = document.querySelector("main");
    LOGO.addEventListener("click", () => {
      htmlMain.innerHTML = "";
      data.items.forEach((item) => {
        htmlMain.innerHTML += `
          <button type="button" class="thumbnail">
          <div class="image-frame">
          <img src="${item.images[0].large}" alt="NO IMAGE" />
    </div>
    <p>${item.title}</p>
    </button>`;
      });
    });

    htmlMain.innerHTML = "";
    data.items.forEach((item) => {
      htmlMain.innerHTML += `
          <button type="button" class="thumbnail">
          <div class="image-frame">
          <img src="${item.images[0].large}" alt="NO IMAGE" />
    </div>
    <p>${item.title}</p>
    </button>
    `;
    });
    const htmlPagination = document.querySelector("#pagination");
    for (let i = 1; i < Math.ceil(data.total / data.items.length) + 1; i++) {
      htmlPagination.innerHTML += `<button type="button">${i}</button>
    `;
    }

    const paginationButtons = document.querySelectorAll("#pagination button");
    paginationButtons.forEach((button) => {
      button.addEventListener("click", () => {
        pageNumber = parseInt(button.textContent);

        fetchDataByPageNumber(pageNumber).then((data) => {
          const LOGO = document.querySelector("#logo-recherche button");
          const htmlMain = document.querySelector("main");
          LOGO.addEventListener("click", () => {
            htmlMain.innerHTML = "";
            data.items.forEach((item) => {
              htmlMain.innerHTML += `
          <button type="button" class="thumbnail">
          <div class="image-frame">
          <img src="${item.images[0].large}" alt="NO IMAGE" />
    </div>
    <p>${item.title}</p>
    </button>`;
            });
          });

          htmlMain.innerHTML = "";
          data.items.forEach((item) => {
            htmlMain.innerHTML += `
          <button type="button" class="thumbnail">
          <div class="image-frame">
          <img src="${item.images[0].large}" alt="NO IMAGE" />
    </div>
    <p>${item.title}</p>
    </button>
    `;
          });
        });
      });
    });

    //do not delete
  });
});
