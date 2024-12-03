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
  getAllHtmlElements,
  displayPaginationButtons,
} from "./js/domManipulation.js";

const HEADER = addHeaderComponent();
const MAIN = addMainComponent();
const PAGINATION = addPaginationComponent();
const FOOTER = addFooterComponent();

let pageNumber = 1;

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
    // for (let i = 1; i < Math.ceil(data.total / data.items.length) + 1; i++) {
    htmlPagination.innerHTML = `
      <button type="button" class="previous"><<</button>
      <p class="page-num">${pageNumber}</p>
      <button type="button" class="next">>></button>
      `;
    document.querySelector(".previous").style.display = "none";

    const paginationButtons = document.querySelectorAll("#pagination button");
    paginationButtons.forEach((button) => {
      button.addEventListener("click", () => {
        if (button.classList.contains("previous")) {
          pageNumber--;
          document.querySelector(".page-num").textContent = pageNumber;
          fetchDataByPageNumber(pageNumber).then((data) => {
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
        }

        if (button.classList.contains("next")) {
          pageNumber++;
          document.querySelector(".page-num").textContent = pageNumber;
          fetchDataByPageNumber(pageNumber).then((data) => {
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
        }
        displayPaginationButtons(pageNumber);

        //   if (button.classList.contains('next') && isNextDisabled) {
        //     document.querySelector(".next").style.display = "none"
        //   }

        //   if (button.classList.contains('previous')&& !isPreviousDisabled) {
        //     pageNumber--;
        //     document.querySelector(".page-num").textContent = pageNumber;
        //     fetchDataByPageNumber(pageNumber).then((data) => {

        //       htmlMain.innerHTML = "";
        //       data.items.forEach((item) => {
        //         htmlMain.innerHTML += `
        //       <button type="button" class="thumbnail">
        //       <div class="image-frame">
        //       <img src="${item.images[0].large}" alt="NO IMAGE" />
        // </div>
        // <p>${item.title}</p>
        // </button>
        // `;
        //       });
        //     });
        //   } else if (button.classList.contains('next')&& !isNextDisabled) {
        //    pageNumber++;
        //    document.querySelector(".page-num").textContent = pageNumber;
        //     fetchDataByPageNumber(pageNumber).then((data) => {

        //       htmlMain.innerHTML = "";
        //       data.items.forEach((item) => {
        //         htmlMain.innerHTML += `
        //       <button type="button" class="thumbnail">
        //       <div class="image-frame">
        //       <img src="${item.images[0].large}" alt="NO IMAGE" />
        // </div>
        // <p>${item.title}</p>
        // </button>
        // `;
        //       });
        //     });
        //   }
      });
    });

    //do not delete
  });
});
