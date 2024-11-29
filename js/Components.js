function addHeaderComponent() {
  return `
    <header>
      <section id="logo-recherche">
          <button type="button">DAF</button>
          <input type="search" id="site-search" placeholder="Recherchez ici"/>
      </section>
      <section id="description">
        <p>Enquêtes en cours du FBI</p>
      </section>
      <nav>
        <ul id="nav-list"></ul>
      </nav>
    </header>
  `;
}

function addMainComponent() {
  return `
    <main></main>
  `;
}

function addPaginationComponent() {
  return `
    <section id="pagination"></section>
  `;
}

function addFooterComponent(){
  return `<footer>
    <section id="US_Embassy">
      <p>Contact de l'<a href="https://fr.usembassy.gov/fr/contact-fr/">Ambassade des Etats-unis d'Amérique à Paris</a> : +33 (0)1 43 12 22 22</p>
    </section>
</footer>`
}

export { addHeaderComponent, addMainComponent, addPaginationComponent, addFooterComponent };
