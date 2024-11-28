function addHeaderComponents() {
  return `
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
    </header>`;
}
export { addHeaderComponents };

function addMainComponents(){
    return `
    <main>
    <button type="button" class="thumbnail">
    <img src="" alt="NO IMAGE" />
    <p>nom de la personne</p>
    </button>
    <section id="pagination"></section>
    </main>
    `
}

export { addMainComponents };
