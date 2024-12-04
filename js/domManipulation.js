// js\domManipulation.js

import { posters_classifications } from "../data/file.js";
import components from "./componentsCreation.js";
import {
  handleClickOnPaginationButton,
  handleClickOnThumbnail,
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
  const sectionThumbnail = document.querySelector("main section#thumbnails");

  sectionThumbnail.insertAdjacentHTML("beforeend", components.THUMBNAIL);

  const thumbnailsArray = sectionThumbnail.
  querySelectorAll(".thumbnail");

  const lastThumbnail = thumbnailsArray[thumbnailsArray.length - 1]
  
  lastThumbnail.querySelector(
    ".image-frame img",
  ).src = `${item.images[0]?.thumb}`;

  lastThumbnail.querySelector("p").innerText =
    `${item.title || "Untitled"}`;

    lastThumbnail.addEventListener("click", () => {
      handleClickOnThumbnail(item)
    })
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

function displayItemDetails(item) {
  const mainElement = document.querySelector("main");
  mainElement.innerHTML = components.PERSON_DETAILS;

  const detailsSection = document.querySelector("#details");

  // Set name
  detailsSection.querySelector(".name-container h1").textContent = item.title || "Untitled";

  // Set image
  const imageElement = detailsSection.querySelector(".image-container img");
  imageElement.src = item.images?.[0]?.large || "";
  imageElement.alt = item.title || "NO IMAGE";

  // Set paragraphs
  const paragraphs = detailsSection.querySelectorAll(".paragraphs p");

  if (!item.description) {
    paragraphs[0].style.display = "none";
  }
  
  if (!item.caution) {
    paragraphs[1].style.display = "none";
  }

  if (!item.details) {
    paragraphs[2].style.display = "none";
  }

  if (!item.remarks) {
    paragraphs[3].style.display = "none";
  }

  paragraphs[0].innerHTML = `<strong>Description:</strong> ${item.description || "N/A"}`;
  paragraphs[1].innerHTML = `<strong>Caution:</strong> ${item.caution || "N/A"}`;
  paragraphs[2].innerHTML = `<strong>Details:</strong> ${item.details || "N/A"}`;
  paragraphs[3].innerHTML = `<strong>Remarks:</strong> ${item.remarks || "N/A"}`;

  // Set table data (if available)
  const table = detailsSection.querySelector("table");
  
  const tableData = [
    { label: "Place of Birth", value: item.place_of_birth || "N/A" },
    { label: "Race", value: item.race || "N/A" },
    { label: "Sex", value: item.sex || "N/A" },
    { label: "Hair", value: item.hair || "N/A" },
    { label: "Eyes", value: item.eyes || "N/A" },
    { label: "Person Classification", value: item.poster_classification || "N/A" },
  ];

  tableData.forEach((row) => {
    const tableRow = table.insertRow();
    const labelCell = tableRow.insertCell(0);
    const valueCell = tableRow.insertCell(1);

    labelCell.textContent = row.label;
    valueCell.textContent = row.value;
  });

  // Hide the table if all fields are missing
  if (tableData.every((row) => row.value === "N/A")) {
    table.style.display = "none";
  }
}

function resetMainContent() {
  initializeHtmlElementContent(document.querySelector("main"), components.MAIN);
  document.querySelector("main").insertAdjacentHTML("beforeend", components.PAGINATION);
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
    globalVariables.page >= Math.ceil(data.total / globalVariables.pageSize)
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

export {
  initializeHtmlElementContent,
  emptyHtmlElementCurrentContent,
  fillHtmlElementWithNewContent,
  resetFiltersOnWebsiteUI,
  createNavigationButton,
  nameNavigationButton,
  displayItemDetails,
  fillMainSectionWithThumbnails,
  updateMainSection,
  updatePaginationButtons,
  displayPaginationButtons,
  resetMainContent,
};
