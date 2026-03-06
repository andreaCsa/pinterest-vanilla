export function Header() {
    const header = document.createElement("header");
  
    header.innerHTML = `
      <div class="logo">P</div>
      <input type="text" id="searchInput" placeholder="Buscar" />
      <button id="searchBtn">Buscar</button>
    `;
  
    return header;
  }