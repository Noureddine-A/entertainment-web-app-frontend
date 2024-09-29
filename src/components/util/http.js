import { getAuthToken } from "../auth/util/auth";

export async function getTrendingContent() {
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

  return apiData.result;
}

export async function getTVSeries() {
  const response = await fetch("http://localhost:8080/entertainment/tvseries", {
    method: "GET",
    headers: {
      Authorization: "Bearer " + getAuthToken(),
    },
  });

  const apiData = await response.json();

  return apiData.result;
}

export async function addBookmark(title, genre, image, releaseYear) {
  const apiData = await fetch("http://localhost:8080/bookmark/save", {
    method: "POST",
    headers: {
      Authorization: "Bearer " + getAuthToken(),
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title: title, genre: genre, posterPath: image, releaseYear: releaseYear }),
  });

  return apiData;
}

export async function deleteBookmark(title) {
  const response = await fetch("http://localhost:8080/bookmark/delete", {
    method: "POST",
    headers: {
      Authorization: "Bearer " + getAuthToken(),
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title: title }),
  });

  const apiData = await response.json();

  return apiData;
}

export async function getBookmarkedContent() {
  const response = await fetch("http://localhost:8080/bookmark/bookmark", {
    method: "GET",
    headers: {
      Authorization: "Bearer " + getAuthToken(),
    }
  })

  const apiData = await response.json();

  return apiData.result;
}