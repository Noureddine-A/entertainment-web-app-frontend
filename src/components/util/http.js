export async function getTrendingContent() {
  const response = await fetch("http://localhost:8080/entertainment/trending");

  const apiData = await response.json();

  return apiData.trending;
}

export async function getRecommendations() {
  const response = await fetch("http://localhost:8080/entertainment/recommendation");

  const apiData = await response.json();

  return apiData.recommendedList;
}
