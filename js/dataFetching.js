// js\dataFetching.js

import {
  updateMainSection,
  updatePaginationButtons,
} from "./domManipulation.js";
import { buildEndpoint } from "./websiteStateManagement.js";

async function fetchDataBasedOnInitialParameters(url = buildEndpoint()) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function fetchDataBasedOnNewParameters() {
  const data = await fetchDataBasedOnInitialParameters(buildEndpoint());

  updateMainSection(data);
  updatePaginationButtons(data);
}

async function fetchItemDetails(pathId) {
  const response = await fetch(pathId);
  const itemDetails = await response.json();
  return itemDetails;
}

export { fetchDataBasedOnInitialParameters, fetchDataBasedOnNewParameters, fetchItemDetails };
