import dictionary from "../data/dictionary.js";

// GENERAL

function getHtmlElement(cssSelector) {
  return document.querySelector(cssSelector);
}

function getAllHtmlElements(cssSelector) {
  return document.querySelectorAll(cssSelector);
}

function displayHtmlElementContent(htmlElement, content) {
  htmlElement.innerHTML = content;
}

function updateHtmlElementContent(htmlElement, content) {
  htmlElement.innerHTML += content;
}

// HEADER

function createNavLinks(navList) {
  for (const key in dictionary) {
    updateHtmlElementContent(
      navList,
      `
      <li>
        <button type="button" class="nav-link">
          ${dictionary[key]}
        </button>
      </li>
    `,
    );
  }
}

// MAIN
function displayPaginationButtons(pageNumber) {
  const previousButton = document.querySelector(".previous");
  const nextButton = document.querySelector(".next");

  if (pageNumber <= 1) {
    previousButton.style.display = "none";
  } else {
    previousButton.style.display = "inline-block";
  }

  if (pageNumber >= 52) {
    nextButton.style.display = "none";
  } else {
    nextButton.style.display = "inline-block";
  }
}

export {
  getHtmlElement,
  getAllHtmlElements,
  displayHtmlElementContent,
  createNavLinks,
  updateHtmlElementContent,
  displayPaginationButtons,
};
