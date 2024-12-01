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

const handleFilterSelection = (variableName, selectedValue) => {
  if (selectedValue === "") {
    globalVariables[variableName] = null;
  } else {
    globalVariables[variableName] = selectedValue;
  }

  globalVariables.pageNumber = 1;

  fetchDataBasedOnNewParameters().then(() => null);
};

const handleClickOnLogoButton = () => {
  globalVariables.pageNumber = 1;
  globalVariables.race = null;
  globalVariables.eyes = null;
  globalVariables.hair = null;

  resetDropdownOptions();

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

  document.querySelector("#logo-recherche button").addEventListener(
    "click",
    handleClickOnLogoButton,
  );

  createCustomizedDropdownMenu(document.querySelector("nav#filters"), "Race", races, "race", handleFilterSelection);
  createCustomizedDropdownMenu(document.querySelector("nav#filters"), "Eyes", eyesColors, "eyes", handleFilterSelection);
  createCustomizedDropdownMenu(document.querySelector("nav#filters"), "Hair", hairs, "hair", handleFilterSelection);

  document.addEventListener('click', function (event) {
    document.querySelectorAll('.custom-dropdown .dropdown-content').forEach((dropdownContent) => {
      if (!dropdownContent.parentElement.contains(event.target)) {
        dropdownContent.classList.remove('show');
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
