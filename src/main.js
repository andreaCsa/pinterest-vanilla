import "./style.css";
import { Gallery } from "./components/Gallery.js";
import { Header } from "./components/Header.js";

const app = document.querySelector("#app");

async function init() {
  app.innerHTML = "";

  const header = Header();
  app.appendChild(header);

  const galleryContainer = document.createElement("div");
  app.appendChild(galleryContainer);

  // CARGA INICIAL
  const defaultGallery = await Gallery("nature");
  galleryContainer.appendChild(defaultGallery);

  // BUSCAR
  document.querySelector("#searchBtn").addEventListener("click", async () => {
    const query = document.querySelector("#searchInput").value;
    if (!query) return;

    galleryContainer.innerHTML = "";
    const gallery = await Gallery(query);
    galleryContainer.appendChild(gallery);

    document.querySelector("#searchInput").value = "";
  });

  // LOGO REINICIA
  document.querySelector(".logo").addEventListener("click", () => {
    init();
  });
}

init();