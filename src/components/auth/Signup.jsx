import React from "react";

import { redirect } from "react-router";

import AuthForm from "./AuthForm";

const Signup = () => {
  return (
    <>
      <AuthForm mode={"signup"} />
    </>
  );
};

export async function signupAction({ request }) {
  const formData = await request.formData();

  const username = formData.get("username");
  const password = formData.get("password");
  const repeatPassword = formData.get("repeatPassword");

  const response = await fetch("http://localhost:8080/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
      repeatPassword: repeatPassword,
    }),
  });

  if(response.status !== 200) {
    const apiData = await response.json();
    return apiData.error;
  }

  return redirect('/auth/login');
}

export default Signup;
