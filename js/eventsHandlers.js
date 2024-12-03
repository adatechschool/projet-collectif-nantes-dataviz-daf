// js\eventsHandlers.js

/* ———— IMPORTS ———— */
import components from "./componentsCreation.js";
import {
  initializeHtmlElementContent,
  createNavigationButton,
  resetFiltersOnWebsiteUI,
} from "./domManipulation.js";
import {
  globalVariables,
  resetInitialEndpointParameters,
  setEndpointParameters,
} from "./websiteStateManagement.js";
import { fetchDataBasedOnNewParameters } from "./dataFetching.js";

/* ———————————————————————————————————————————————— */

const handleDisplayOfWebsite = () => {
  initializeHtmlElementContent(
    document.querySelector("#Website"),
    `
      ${components.HEADER}    
      ${components.MAIN}
      ${components.FOOTER}
    `,
  );

  document
    .querySelector("#logo-recherche button")
    .addEventListener("click", handleClickOnLogoButton);

  document.querySelector("#site-search").addEventListener("input", (event) => {
    handleFilterSelection("title", event.target.value);
  });

  document
    .querySelector("main")
    .insertAdjacentHTML("beforeend", components.PAGINATION);

  createNavigationButton();
  fetchDataBasedOnNewParameters().then(() => null);
};

const handleClickOnLogoButton = () => {
  resetFiltersOnWebsiteUI();
  resetInitialEndpointParameters();
  fetchDataBasedOnNewParameters().then(() => null);
};

const handleFilterSelection = (variableName, selectedValue) => {
  setEndpointParameters(variableName, selectedValue);
  fetchDataBasedOnNewParameters().then(() => null);
};

const handleClickOnPaginationButton = (event) => {
  if (event.target.classList.contains("previous")) {
    globalVariables.page--;
  }

  if (event.target.classList.contains("next")) {
    globalVariables.page++;
  }

  document.querySelector(".page-num").textContent = globalVariables.page;
  setEndpointParameters("page", globalVariables.page);
  fetchDataBasedOnNewParameters().then(() => null);
};

export {
  handleDisplayOfWebsite,
  handleClickOnLogoButton,
  handleFilterSelection,
  handleClickOnPaginationButton,
};
