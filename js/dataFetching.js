// js\dataFetching.js

import {
  emptyHtmlElementCurrentContent,
  fillHtmlElementWithNewContent,
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

  if (data.items.length === 0) {
    fillHtmlElementWithNewContent(
      document.querySelector("main"),
      `<h1 class="no-result">No result found</h1>`,
    );
  }

  data.items.forEach((item) => {
    fillMainSectionWithThumbnails(item);
  });

  updatePaginationButtons(data);
}

export { fetchDataBasedOnInitialParameters, fetchDataBasedOnNewParameters };
