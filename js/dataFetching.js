// js\dataFetching.js

import {
  emptyHtmlElementCurrentContent,
  fillMainSectionWithThumbnails,
  updatePaginationButtons,
} from "./domManipulation.js";
import { buildEndpoint } from "./globalVariables.js";

async function fetchDataBasedOnInitialParameters(url = buildEndpoint()) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function fetchDataBasedOnNewParameters() {
  const data = await fetchDataBasedOnInitialParameters(buildEndpoint());

  emptyHtmlElementCurrentContent(document.querySelector("main"));

  data.items.forEach((item) => {
    fillMainSectionWithThumbnails(item);
  });

  updatePaginationButtons(data);
}

export {
  fetchDataBasedOnInitialParameters,
  fetchDataBasedOnNewParameters,
};
