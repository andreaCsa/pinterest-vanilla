const ACCESS_KEY = "ggG-8FWylSMh4yEdeFbOvck9fUGxWF1vmLBxseS32IA";

export async function getImages(query) {
  const response = await fetch(
    `https://api.unsplash.com/search/photos?query=${query}&client_id=${ACCESS_KEY}`
  );

  const data = await response.json();
  return data.results;
}