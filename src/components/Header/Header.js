import "./Header.css"

export function Header(onSearch) {
  const header = document.createElement("header")

  header.innerHTML = `
    <div class="logo">P</div>
    <input type="text" id="searchInput" placeholder="Buscar" />
    <button id="searchBtn">Buscar</button>
  `

  const searchInput = header.querySelector("#searchInput")
  const searchBtn = header.querySelector("#searchBtn")

  searchBtn.addEventListener("click", () => {
    onSearch(searchInput.value)
  })

  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      onSearch(searchInput.value)
    }
  })

  return header
}