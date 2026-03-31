import "./Modal.css"

export function Modal(imageUrl) {
  const modal = document.createElement("div")
  modal.className = "modal"

  modal.innerHTML = `
    <div class="modal-content">
      <img src="${imageUrl}" />
    </div>
  `

  modal.addEventListener("click", () => {
    modal.remove()
  })

  return modal
}