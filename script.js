import dictionary from "./data/dictionary.js";
import { addHeaderComponents } from "./js/Components.js";
import { fetchDataByPageNumber } from "./js/fetchedData.js";
import { addMainComponents } from "./js/Components.js"

const HEADER = addHeaderComponents();
const MAIN = addMainComponents();

document.addEventListener("DOMContentLoaded", () => {
  const WEBSITE = document.querySelector("#Website");
  WEBSITE.innerHTML = `
  ${HEADER}    
  ${MAIN}
    <footer>
    contact du FBI: 
    </footer>
    `;

  fetchDataByPageNumber(1).then((data) => {
    console.log(data);
    const navList = document.querySelector("#nav-list");
    // console.log(navList)

    for (const key in dictionary) {
      navList.innerHTML += `
        <li>
        <button type="button" class="nav-link">${dictionary[key]}</button>
        </li>
        `;
    }

    const BUTTONS_HTML = document.querySelectorAll(".nav-link");
    //WIP
    BUTTONS_HTML.forEach((button) => {
      button.addEventListener("click", () => {
        const MAIN = document.querySelector("main");
        MAIN.innerHTML = `<p>${button.textContent}</p>`;
      });
    });

    const LOGO = document.querySelector("#logo-recherche button");
    LOGO.addEventListener("click", () => {
      const MAIN = document.querySelector("main");
      MAIN.innerHTML = `
          <button type="button" class="thumbnail">
    <img src="" alt="NO IMAGE" />
    <p></p>
    </button>
    <section id="pagination"></section>`;
    });

    
    //do not delete
  });
});
