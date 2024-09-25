export async function getTrendingContent() {
  const response = await fetch("http://localhost:8080/entertainment/trending");

  const apiData = await response.json();

  return apiData.result;
}

export async function getRecommendations() {
  const response = await fetch("http://localhost:8080/entertainment/recommendation");

  const apiData = await response.json();

  return apiData.result;
}

export async function getMovies() {
  const response = await fetch("http://localhost:8080/entertainment/movie");

  const apiData = await response.json();

  return apiData.result.results;
}

export async function getTVSeries() {
  const response = await fetch("http://localhost:8080/entertainment/tvseries");

  const apiData = await response.json();

  return apiData.result.results;
}
