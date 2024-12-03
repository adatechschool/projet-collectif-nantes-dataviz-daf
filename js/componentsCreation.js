// js\componentsCreation.js

const HEADER = `
  <header>
    <section id="logo-recherche">
      <button type="button">
        <img src="assets/DAF-logo.png" alt="DAF" title="Retour Accueil"/>
      </button>
      <input type="search" id="site-search" placeholder="Search by title"/>
    </section>
    <section id="description">
      <h1>Ongoing FBI investigations</h1>
    </section>
    <nav id="filters"></nav>
  </header>
`;

/* ———— MAIN ———— */
const MAIN = `
  <main>
    <section id="thumbnails"></section>
  </main>
`;

const THUMBNAIL = `
  <button type="button" class="thumbnail">
    <div class="image-frame">
      <img src="" alt="NO IMAGE" loading="lazy" />
    </div>
    <p></p>
  </button>
`;

const PAGINATION = `
<div id="pagination-container">
  <section id="pagination"></section>
</div>
`;
/* ——————————— */

const FOOTER = `
  <footer>
    <section id="US_Embassy">
      <p>Contact the <a target="_blank" href="https://fr.usembassy.gov/fr/contact-fr/">Embassy of the United States of America</a> in Paris : +33 (0)1 43 12 22 22</p>
    </section>
  </footer>
`;

const components = {
    HEADER,
    MAIN,
    THUMBNAIL,
    PAGINATION,
    FOOTER,
};

export default components;
