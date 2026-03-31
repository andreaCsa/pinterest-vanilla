import "./style.css"
import { Gallery } from "./components/Gallery/Gallery.js"
import { Header } from "./components/Header/Header.js"

const app = document.querySelector("#app")
const headerRoot = document.querySelector("#header-root")

async function init() {
  app.innerHTML = ""
  headerRoot.innerHTML = ""

  const galleryContainer = document.createElement("div")

  const header = Header(async (query) => {
    if (!query) return

    galleryContainer.innerHTML = ""
    const gallery = await Gallery(query)
    galleryContainer.appendChild(gallery)
  })

  headerRoot.appendChild(header)
  app.appendChild(galleryContainer)

  const defaultGallery = await Gallery("nature")
  galleryContainer.appendChild(defaultGallery)

  header.querySelector(".logo").addEventListener("click", init)
}

init()