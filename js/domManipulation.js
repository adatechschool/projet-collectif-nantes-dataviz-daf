// js\domManipulation.js

import { posters_classifications } from "../data/file.js";
import components from "./componentsCreation.js";
import {
  handleClickOnPaginationButton,
  handleFilterSelection,
} from "./eventsHandlers.js";
import { globalVariables } from "./websiteStateManagement.js";

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
function resetFiltersOnWebsiteUI() {
  document.querySelectorAll(".filter-button").forEach((button) => {
    button.classList.remove("active");
  });

  document.querySelector("#site-search").value = "";
}

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

  document.querySelectorAll("#pagination button").forEach((button) => {
    button.addEventListener("click", (event) => {
      handleClickOnPaginationButton(event);
    });
  });
}

/* ———— MAIN ———— */
function fillMainSectionWithThumbnails(item) {
  document
    .querySelector("main section#thumbnails")
    .insertAdjacentHTML("beforeend", components.THUMBNAIL);

  document
    .querySelector("main section#thumbnails")
    .querySelectorAll(".thumbnail")
    [
      document
        .querySelector("main section#thumbnails")
        .querySelectorAll(".thumbnail").length - 1
    ].querySelector(".image-frame img").src = `${item.images[0]?.thumb}`;

  document
    .querySelector("main section#thumbnails")
    .querySelectorAll(".thumbnail")
    [
      document
        .querySelector("main section#thumbnails")
        .querySelectorAll(".thumbnail").length - 1
    ].querySelector("p").innerText = `${item.title || "Untitled"}`;
}

function updateMainSection(data) {
  emptyHtmlElementCurrentContent(
    document.querySelector("main section#thumbnails"),
  );

  if (data.items.length === 0) {
    fillHtmlElementWithNewContent(
      document.querySelector("main section#thumbnails"),
      `<h1 class="no-result">No result found</h1>`,
    );
  }

  data.items.forEach((item) => {
    fillMainSectionWithThumbnails(item);
  });
}

/* ———— PAGINATION ———— */
function displayPaginationButtons(data) {
  const previousButton = document.querySelector(".previous");
  const nextButton = document.querySelector(".next");

  if (globalVariables.page <= 1) {
    previousButton.style.display = "none";
  } else {
    previousButton.style.display = "inline-block";
  }

  if (
    globalVariables.page >=
    Math.ceil(data.total / globalVariables.pageSize)
  ) {
    nextButton.style.display = "none";
  } else {
    nextButton.style.display = "inline-block";
  }
}

function updatePaginationButtons(data) {
  emptyHtmlElementCurrentContent(document.querySelector("#pagination"));

  fillHtmlElementWithNewContent(
    document.querySelector("#pagination"),
    `
        <button type="button" class="previous"><<</button>
        <p class="page-num">${globalVariables.page}</p>
        <button type="button" class="next">>></button>
      `,
  );

  displayPaginationButtons(data);

  document.querySelectorAll("#pagination button").forEach((button) => {
    button.addEventListener("click", (event) => {
      handleClickOnPaginationButton(event);
    });
  });
}

// MAIN
function displayPaginationButtons(pageNumber) {
  const previousButton = document.querySelector(".previous");
  const nextButton = document.querySelector(".next");

  if (pageNumber <= 1) {
    previousButton.style.display = "none";
  } else {
    previousButton.style.display = "inline-block";
  }

  if (pageNumber >= 52) {
    nextButton.style.display = "none";
  } else {
    nextButton.style.display = "inline-block";
  }
}

export {
  initializeHtmlElementContent,
  emptyHtmlElementCurrentContent,
  fillHtmlElementWithNewContent,
  resetFiltersOnWebsiteUI,
  createNavigationButton,
  nameNavigationButton,
  fillMainSectionWithThumbnails,
  updateMainSection,
  updatePaginationButtons,
  displayPaginationButtons,
};
