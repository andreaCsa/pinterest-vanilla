const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_KEY

export async function getImages(query) {
  try {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=${query}&per_page=20&client_id=${ACCESS_KEY}`
    )

    const data = await response.json()
    return data.results || []
  } catch (error) {
    console.error(error)
    return []
  }
}