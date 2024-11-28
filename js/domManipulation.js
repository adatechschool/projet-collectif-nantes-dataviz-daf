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

export {
  getHtmlElement,
  getAllHtmlElements,
  displayHtmlElementContent,
  createNavLinks,
  updateHtmlElementContent,
};
