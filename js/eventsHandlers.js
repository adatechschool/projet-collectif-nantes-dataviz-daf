// js\eventsHandlers.js

/* ———— IMPORTS ———— */
import { HEADER, MAIN, PAGINATION, FOOTER } from "./componentsCreation.js";
import {
  initializeHtmlElementContent,
  createDropdownMenu,
  resetDropdownOptions,
} from "./domManipulation.js";
import { globalVariables } from "./globalVariables.js";
import { fetchDataBasedOnNewParameters } from "./dataFetching.js";
import { races, eyesColors, hairs } from "../data/file.js";

/* ———————————————————————————————————————————————— */

const handleDropdownChange = (event) => {
  if (event.target.value === "") {
    globalVariables[event.target.name] = null;
  } else {
    globalVariables[event.target.name] = event.target.value;
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

  createDropdownMenu(document.querySelector("#filters"), "Race", races, "race");
  createDropdownMenu(document.querySelector("#filters"), "Eyes", eyesColors, "eyes");
  createDropdownMenu(document.querySelector("#filters"), "Hair", hairs, "hair");

  ["race", "eyes", "hair"].forEach((id) => {
    document.querySelector(`#${id}`).addEventListener("change", (event) => {
      handleDropdownChange(event);
    });
  });

  document.querySelector("#logo-recherche button").addEventListener(
    "click",
    handleClickOnLogoButton,
  );

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
