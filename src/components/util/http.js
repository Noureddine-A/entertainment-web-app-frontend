export async function getTrendingContent() {
  const response = await fetch("http://localhost:8080/entertainment/trending");

  const apiData = await response.json();

  return apiData.trending;
}
