import dictionary from "./data/dictionary.js";

async function fetchData() {
  const RESPONSE = await fetch("https://api.fbi.gov/wanted");
  const data = await RESPONSE.json();
  return data;
}

document.addEventListener("DOMContentLoaded", () => {
  const WEBSITE = document.querySelector("#Website");
  WEBSITE.innerHTML = `
  <header>
    <section id="logo-recherche">
        <button type="button">DAF</button>
        <input type="search" id="site-search"   placeholder="Recherchez ici"/>
    </section>

    <section id="description">
    <p>Enquêtes en cours du FBI</p>
    </section>
    
    <nav>
    <ul id="nav-list">
    
    </ul>
    </nav>
    </header>
    
    <main>
    <button type="button" class="thumbnail">
    <img src="" alt="NO IMAGE" />
    <p>nom de la personne</p>
    </button>
    <section id="pagination"></section>
    </main>

    <footer>
    contact du FBI: 
    </footer>
    `;

  fetchData().then((data) => {
    let pageNumber = data.page;
    const globalData = [];
    const subjects = [];
    const totalPagesNumber = Math.ceil(1028 / 20);

    // on récupère toutes les données de toutes les pages l'API
    while (pageNumber < totalPagesNumber) {
      for (let i = 0; i < data.items.length; i++) {
        globalData.push(data.items[i]);
      }
      pageNumber++;
    }
    // on filtre les données récupérées au dessus pour ne garder que les informations contenues dans la partie "subjects"
    for (let i = 0; i < globalData.length; i++) {
      subjects.push(globalData[i].subjects[0]);
    }
    // new Set = enlève les doublons
    const realSubjectsArray = new Set(subjects);
    console.log(realSubjectsArray);

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
