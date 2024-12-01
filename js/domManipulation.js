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
function createCustomizedDropdownMenu(
  parentElement,
  labelText,
  optionsArray,
  variableName,
  onSelectCallback,
) {
  const dropdownContainer = document.createElement("div");
  dropdownContainer.classList.add("custom-dropdown");

  const button = document.createElement("button");
  button.type = "button";
  button.classList.add("dropdown-button");
  button.textContent = labelText;

  // Store the original label for resetting
  button.dataset.originalLabel = labelText;

  const dropdownContent = document.createElement("div");
  dropdownContent.classList.add("dropdown-content");

  optionsArray.forEach((optionValue) => {
    const option = document.createElement("div");
    option.classList.add("dropdown-option");
    option.dataset.value = optionValue;
    option.textContent = optionValue;
    dropdownContent.appendChild(option);
  });

  dropdownContainer.appendChild(button);
  dropdownContainer.appendChild(dropdownContent);
  parentElement.appendChild(dropdownContainer);

  // Toggle dropdown visibility
  button.addEventListener("click", () => {
    dropdownContent.classList.toggle("show");
  });

  // Handle option selection
  dropdownContent.addEventListener("click", (event) => {
    if (event.target.classList.contains("dropdown-option")) {
      const selectedValue = event.target.dataset.value;
      button.textContent = `${labelText}: ${selectedValue}`;
      button.classList.add("active");
      dropdownContent.classList.remove("show");
      // Call the callback function if provided
      if (onSelectCallback) {
        onSelectCallback(variableName, selectedValue);
      }
    }
  });
}

const resetDropdownOptions = () => {
  document
    .querySelectorAll(".custom-dropdown .dropdown-button")
    .forEach((button) => {
      button.textContent = button.dataset.originalLabel;
      button.classList.remove("active");
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
  createCustomizedDropdownMenu,
  resetDropdownOptions,
  fillMainSectionWithThumbnails,
  updatePaginationButtons,
};
