// js\componentsCreation.js

const HEADER = `
  <header>
    <section id="logo-recherche">
      <button type="button">DAF</button>
      <input type="search" id="site-search" placeholder="Search by ..."/>
    </section>
    <section id="description">
      <h1>Ongoing FBI investigations</h1>
    </section>
    <nav id="filters"></nav>
  </header>
`;

const MAIN = `
  <main></main>
`;

const PAGINATION = `
  <section id="pagination"></section>
`;

const FOOTER = `
  <footer>
    <section id="US_Embassy">
      <p>
        Contact the <a target="_blank" href="https://fr.usembassy.gov/fr/contact-fr/">Embassy of the United States of America</a> : +33 (0)1 43 12 22 22
      </p>
    </section>
  </footer>
`;

export { HEADER, MAIN, PAGINATION, FOOTER };
