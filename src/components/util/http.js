import { getAuthToken } from "../auth/util/auth";

export async function getTrendingContent() {
  console.log(getAuthToken());
  const response = await fetch("http://localhost:8080/entertainment/trending", {
    method: "GET",
    headers: {
      Authorization: "Bearer " + getAuthToken(),
    },
  });

  const apiData = await response.json();

  return apiData.result;
}

export async function getRecommendations() {
  const response = await fetch(
    "http://localhost:8080/entertainment/recommendation",
    {
      method: "GET",
      headers: {
        Authorization: "Bearer " + getAuthToken(),
      },
    }
  );

  const apiData = await response.json();

  return apiData.result;
}

export async function getMovies() {
  const response = await fetch("http://localhost:8080/entertainment/movie", {
    method: "GET",
    headers: {
      Authorization: "Bearer " + getAuthToken(),
    },
  });

  const apiData = await response.json();

  return apiData.result.results;
}

export async function getTVSeries() {
  const response = await fetch("http://localhost:8080/entertainment/tvseries", {
    method: "GET",
    headers: {
      Authorization: "Bearer " + getAuthToken(),
    },
  });

  const apiData = await response.json();

  return apiData.result.results;
}

export async function addBookmark(title, genre) {
  await fetch("http://localhost:8080/bookmark/save", {
    method: "POST",
    headers: {
      Authorization: "Bearer " + getAuthToken(),
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title: title, genre: genre }),
  });
}
