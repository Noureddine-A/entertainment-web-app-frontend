import {redirect} from 'react-router-dom';

export function getAuthToken() {
  return localStorage.getItem("token");
}

export function removeAuthToken() {
  localStorage.removeItem("token");

  return redirect("/auth/login");
}