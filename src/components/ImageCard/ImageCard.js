import "./ImagenCard.css"
import { Modal } from "../Modal/Modal.js"

export function ImageCard(image) {
  const card = document.createElement("div")
  card.className = "image-card"

  card.innerHTML = `
    <div class="image-wrapper">
      <img src="${image.urls.small}" alt="${image.alt_description || "Imagen"}" />
      <a href="${image.links.html}" target="_blank" class="visit-btn">Visitar</a>
    </div>

    <div class="image-info">
      <img class="avatar" src="${image.user.profile_image.small}" />
      <div class="author-info">
        <p class="author-name">${image.user.name}</p>
        <p class="image-date">${new Date(image.created_at).toLocaleDateString()}</p>
      </div>
    </div>
  `

  const img = card.querySelector("img")

  img.addEventListener("click", () => {
    const modal = Modal(image.urls.regular)
    document.body.appendChild(modal)
  })

  return card
}