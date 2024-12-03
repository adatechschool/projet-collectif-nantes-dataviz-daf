// js\domManipulation.js

import { handleClickOnPaginationButton } from "./eventsHandlers.js";
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
function createDropdownMenu(parentElement, labelText, optionsArray, variableName) {
  const label = document.createElement("label");
  label.textContent = labelText;
  label.for = variableName;
  
  const select = document.createElement("select");
  select.name = variableName;
  select.id = variableName;
  
  const defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.textContent = "Any";
  select.appendChild(defaultOption);
  
  optionsArray.forEach((optionValue) => {
    const option = document.createElement("option");
    option.value = optionValue;
    option.textContent = optionValue;
    select.appendChild(option);
  });
  
  parentElement.appendChild(label);
  parentElement.appendChild(select);
}

const resetDropdownOptions = () => {
  ["race", "eyes", "hair"].forEach((id) => {
    document.querySelector(`#${id}`).value = "";
  });
};

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

  for (let i = 1; i < Math.ceil(data.total / globalVariables.pageSize) + 1; i++) {
    fillHtmlElementWithNewContent(document.querySelector("#pagination"), `<button type="button">${i}</button>`);
  }

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
  createDropdownMenu,
  resetDropdownOptions,
  fillMainSectionWithThumbnails,
  updatePaginationButtons,
  displayPaginationButtons,
};
