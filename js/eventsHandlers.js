// js\eventsHandlers.js

/* ———— IMPORTS ———— */
import components from "./componentsCreation.js";
import {
  initializeHtmlElementContent,
  createNavigationButton,
  resetFiltersOnWebsiteUI,
  displayItemDetails,
  resetMainContent,
} from "./domManipulation.js";
import {
  globalVariables,
  resetInitialEndpointParameters,
  setEndpointParameters,
} from "./websiteStateManagement.js";
import { fetchDataBasedOnNewParameters, fetchItemDetails } from "./dataFetching.js";

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
  resetMainContent();
  resetInitialEndpointParameters();
  fetchDataBasedOnNewParameters().then(() => null);
};

const handleFilterSelection = (variableName, selectedValue) => {
  resetMainContent();
  setEndpointParameters(variableName, selectedValue);
  fetchDataBasedOnNewParameters().then(() => null);
};

const handleClickOnThumbnail = (item) => {
  fetchItemDetails(item.pathId).then((itemDetails) => {
    displayItemDetails(itemDetails);
  });
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
  handleClickOnThumbnail,
  handleClickOnPaginationButton,
};
