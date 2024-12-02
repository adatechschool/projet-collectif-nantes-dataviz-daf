// js\eventsHandlers.js

/* ———— IMPORTS ———— */
import { HEADER, MAIN, FOOTER } from "./componentsCreation.js";
import {
  initializeHtmlElementContent,
  createNavigationButton,
  resetFiltersOnWebsiteUI,
} from "./domManipulation.js";
import {
  resetInitialEndpointParameters,
  setEndpointParameters,
} from "./websiteStateManagement.js";
import { fetchDataBasedOnNewParameters } from "./dataFetching.js";

/* ———————————————————————————————————————————————— */

const handleDisplayOfWebsite = () => {
  initializeHtmlElementContent(
    document.querySelector("#Website"),
    `
      ${HEADER}    
      ${MAIN}
      ${FOOTER}
    `,
  );

  document
    .querySelector("#logo-recherche button")
    .addEventListener("click", handleClickOnLogoButton);

  document.querySelector("#site-search").addEventListener("input", (event) => {
    handleFilterSelection("title", event.target.value);
  });

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
  setEndpointParameters("page", parseInt(event.currentTarget.textContent));
  fetchDataBasedOnNewParameters().then(() => null);
};

export {
  handleDisplayOfWebsite,
  handleClickOnLogoButton,
  handleFilterSelection,
  handleClickOnPaginationButton,
};
