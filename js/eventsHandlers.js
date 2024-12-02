// js\eventsHandlers.js

/* ———— IMPORTS ———— */
import { HEADER, MAIN, PAGINATION, FOOTER } from "./componentsCreation.js";
import {
  createNavigationButton,
  initializeHtmlElementContent,
} from "./domManipulation.js";
import { globalVariables } from "./globalVariables.js";
import { fetchDataBasedOnNewParameters } from "./dataFetching.js";

/* ———————————————————————————————————————————————— */

const handleClickOnLogoButton = () => {
  globalVariables.pageNumber = 1;
  globalVariables.poster_classification = null;

  document.querySelectorAll(".filter-button").forEach((button) => {
    button.classList.remove("active");
  });

  document.querySelector("#site-search").value = "";

  fetchDataBasedOnNewParameters().then(() => null);
};

const handleSearchBarInput = (event) => {
  globalVariables.title = event.target.value || null;
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

  createNavigationButton();

  fetchDataBasedOnNewParameters().then(() => null);
};

const handleClickOnPaginationButton = (event) => {
  globalVariables.pageNumber = parseInt(event.currentTarget.textContent);

  fetchDataBasedOnNewParameters().then(() => null);
};

export {
  handleDisplayOfWebsite,
  handleClickOnLogoButton,
  handleFilterSelection,
  handleClickOnPaginationButton,
};
