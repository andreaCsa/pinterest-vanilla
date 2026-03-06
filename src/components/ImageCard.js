export function ImageCard(image) {
  const div = document.createElement("div");
  div.className = "card";

  const img = document.createElement("img");
  img.src = image.urls.small;
  img.alt = image.alt_description || "image";

  img.addEventListener("click", () => {
    const modal = document.createElement("div");
    modal.className = "modal";

    const bigImg = document.createElement("img");
    bigImg.src = image.urls.regular;

    modal.appendChild(bigImg);

    modal.addEventListener("click", () => {
      modal.remove();
    });

    document.body.appendChild(modal);
  });

  div.appendChild(img);
  return div;
}