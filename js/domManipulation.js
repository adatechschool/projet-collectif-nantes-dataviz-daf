// js\domManipulation.js

import { posters_classifications } from "../data/file.js";
import {
  handleClickOnPaginationButton,
  handleFilterSelection,
} from "./eventsHandlers.js";
import { globalVariables } from "./globalVariables.js";

/* ———— GENERIC ———— */
function initializeHtmlElementContent(htmlElement, content) {
  htmlElement.innerHTML = content;
}

function emptyHtmlElementCurrentContent(htmlElement) {
  htmlElement.innerHTML = "";
}

function fillHtmlElementWithNewContent(htmlElement, content) {
  htmlElement.innerHTML += content;
}

/* ———— HEADER ———— */
function createNavigationButton() {
  posters_classifications.forEach((classification) => {
    const button = document.createElement("button");
    button.type = "button";
    button.classList.add("filter-button");
    button.textContent = nameNavigationButton(classification);
    button.addEventListener("click", () => {
      document.querySelectorAll(".filter-button").forEach((button) => {
        button.classList.remove("active");
      });
      button.classList.add("active");
      handleFilterSelection("poster_classification", classification);
    });
    document.querySelector("nav#filters").appendChild(button);
  });
}

function nameNavigationButton(classification) {
  switch (classification) {
    case "information":
      return "Information";
    case "missing":
      return "Missing persons";
    case "ten":
      return "Ten most wanted";
    case "terrorist":
      return "Terrorist";
    case "kidnapping":
      return "Kidnapping";
    case "ecap":
      return "Endangered children";
  }
}

/* ———— MAIN ———— */
function fillMainSectionWithThumbnails(item) {
  fillHtmlElementWithNewContent(
    document.querySelector("main"),
    `
    <button type="button" class="thumbnail">
      <div class="image-frame">
        <img src="${item.images[0]?.thumb}"  alt="NO IMAGE" loading="lazy" />
      </div>
      <p>${item.title}</p>
    </button>
    `,
  );
}

/* ———— PAGINATION ———— */
function updatePaginationButtons(data) {
  emptyHtmlElementCurrentContent(document.querySelector("#pagination"));

  for (
    let i = 1;
    i < Math.ceil(data.total / globalVariables.pageSize) + 1;
    i++
  ) {
    fillHtmlElementWithNewContent(
      document.querySelector("#pagination"),
      `<button type="button">${i}</button>`,
    );
  }

  document.querySelectorAll("#pagination button").forEach((button) => {
    button.addEventListener("click", (event) => {
      handleClickOnPaginationButton(event);
    });
  });
}

export {
  initializeHtmlElementContent,
  emptyHtmlElementCurrentContent,
  fillHtmlElementWithNewContent,
  createNavigationButton,
  nameNavigationButton,
  fillMainSectionWithThumbnails,
  updatePaginationButtons,
};
