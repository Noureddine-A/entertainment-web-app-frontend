import React from "react";
import AuthForm from "./AuthForm";
import { redirect } from "react-router";

const Login = () => {
  return (
    <>
      <AuthForm mode="login" />
    </>
  );
};

export async function loginAction({ request }) {
  const formData = await request.formData();

  const username = formData.get("username");
  const password = formData.get("password");

  const response = await fetch("http://localhost:8080/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username: username, password: password }),
  });

  const apiData = await response.json();

  if (response.status !== 200) {
    return apiData.error;
  }

  localStorage.setItem("token", apiData.token);

  return redirect("/home");
}

export default Login;
