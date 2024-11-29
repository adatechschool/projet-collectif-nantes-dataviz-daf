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

export { addPaginationComponent, addHeaderComponent, addMainComponent };
