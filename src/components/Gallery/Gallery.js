import "./Gallery.css"
import { getImages } from "../../api.js"
import { ImageCard } from "../ImageCard/ImageCard.js"

export async function Gallery(query) {
  const section = document.createElement("section")
  section.className = "gallery"

  const images = await getImages(query)

  images.forEach((image) => {
    const card = ImageCard(image)
    section.appendChild(card)
  })

  return section
}