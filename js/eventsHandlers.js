// js\eventsHandlers.js

/* ———— IMPORTS ———— */
import { HEADER, MAIN, PAGINATION, FOOTER } from "./componentsCreation.js";
import {
  initializeHtmlElementContent,
  createCustomizedDropdownMenu,
  resetDropdownOptions,
} from "./domManipulation.js";
import { globalVariables } from "./globalVariables.js";
import { fetchDataBasedOnNewParameters } from "./dataFetching.js";
import { races, eyesColors, hairs } from "../data/file.js";

/* ———————————————————————————————————————————————— */

const handleClickOnLogoButton = () => {
  globalVariables.pageNumber = 1;
  globalVariables.title = null;
  globalVariables.race = null;
  globalVariables.eyes = null;
  globalVariables.hair = null;

  resetDropdownOptions();

  // Clear the search input field
  document.querySelector("#site-search").value = "";

  fetchDataBasedOnNewParameters().then(() => null);
};

const handleSearchBarInput = (event) => {
  globalVariables.title = event.target.value.trim() || null;
  globalVariables.pageNumber = 1;

  fetchDataBasedOnNewParameters().then(() => null);
};

const handleFilterSelection = (variableName, selectedValue) => {
  if (selectedValue === "") {
    globalVariables[variableName] = null;
  } else {
    globalVariables[variableName] = selectedValue;
  }

  globalVariables.pageNumber = 1;

  fetchDataBasedOnNewParameters().then(() => null);
};

const handleDisplayOfWebsite = () => {
  initializeHtmlElementContent(
    document.querySelector("#Website"),
    `
      ${HEADER}    
      ${MAIN}
      ${PAGINATION}
      ${FOOTER}
    `,
  );

  document
    .querySelector("#logo-recherche button")
    .addEventListener("click", handleClickOnLogoButton);

  document
    .querySelector("#site-search")
    .addEventListener("input", handleSearchBarInput);

  createCustomizedDropdownMenu(
    document.querySelector("nav#filters"),
    "Race",
    races,
    "race",
    handleFilterSelection,
  );
  createCustomizedDropdownMenu(
    document.querySelector("nav#filters"),
    "Eyes",
    eyesColors,
    "eyes",
    handleFilterSelection,
  );
  createCustomizedDropdownMenu(
    document.querySelector("nav#filters"),
    "Hair",
    hairs,
    "hair",
    handleFilterSelection,
  );

  document.addEventListener("click", function (event) {
    document
      .querySelectorAll(".custom-dropdown .dropdown-content")
      .forEach((dropdownContent) => {
        if (!dropdownContent.parentElement.contains(event.target)) {
          dropdownContent.classList.remove("show");
        }
      });
  });

  fetchDataBasedOnNewParameters().then(() => null);
};

const handleClickOnPaginationButton = (event) => {
  globalVariables.pageNumber = parseInt(event.currentTarget.textContent);

  fetchDataBasedOnNewParameters().then(() => null);
};

export {
  handleClickOnLogoButton,
  handleDisplayOfWebsite,
  handleClickOnPaginationButton,
};
