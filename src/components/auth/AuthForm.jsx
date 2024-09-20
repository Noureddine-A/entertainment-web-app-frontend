import React from "react";

import "./AuthForm.css";
import { Form, Link, useActionData } from "react-router-dom";

import Logo from "../../assets/images/logo.svg";

const AuthForm = ({ mode }) => {
  const actionData = useActionData();

  let userInputField = (
    <div className="entertainment__auth-form-email-container">
      <input
        className="entertainment__auth-form-email-input"
        type="text"
        name="username"
        placeholder="Username"
      />
    </div>
  );

  let userPasswordField = (
    <div className="entertainment__auth-form-password-container">
      <input
        className="entertainment__auth-form-password-input"
        type="password"
        name="password"
        placeholder="Password"
      />
    </div>
  );

  let userRepeatPasswordField = (
    <div className="entertainment__auth-form-repeat-password-container">
      <input
        className="entertainment__auth-form-password-input"
        type="password"
        name="repeatPassword"
        placeholder="Repeat password"
      />
    </div>
  );

  console.log(actionData);

  for (let i = 0; i < actionData?.length; i++) {
    if (actionData[i].value === "username") {
      userInputField = (
        <div className="entertainment__auth-form-email-container-error">
          <input type="username" name="username" placeholder="Username" />
          <div className="entertainment__auth-form-email-error-msg-container">
            <p>{actionData[i].message}</p>
          </div>
        </div>
      );
    } else if (actionData[i].value === "password") {
      userPasswordField = (
        <div className="entertainment__auth-form-password-container-error">
          <input type="password" name="password" placeholder="Password" />
          <div className="entertainment__auth-form-password-error-msg-container">
            <p>{actionData[i].message}</p>
          </div>
        </div>
      );
    } else if (actionData[i].value === "repeatPassword") {
      userRepeatPasswordField = (
        <div className="entertainment__auth-form-repeat-password-container-error">
          <input
            type="password"
            name="repeatPassword"
            placeholder="Repeat password"
          />
          <div className="entertainment__auth-form-repeat-password-error-msg-container">
            <p>{actionData[i].message}</p>
          </div>
        </div>
      );
    }
  }

  return (
    <div className="entertainment__auth-container">
      <div className="entertainment__auth-logo-container">
        <img src={Logo} alt={Logo} />
      </div>
      <Form
        className="entertainment__auth-form-container"
        method="post"
        action="/auth/signup"
      >
        {mode === "signup" ? <h1>Sign Up</h1> : <h1>Login</h1>}
        {userInputField}
        {userPasswordField}
        {mode === "signup" && userRepeatPasswordField}

        <div className="entertainment__auth-form-button-container">
          <button>
            {mode === "signup" ? "Create an account" : "Login to your account"}
          </button>
        </div>
        <div className="entertainment__auth-form-no-account-container">
          {mode === "signup" ? (
            <>
              <p>Already have an account?</p>{" "}
              <Link to="/auth/login">Login</Link>{" "}
            </>
          ) : (
            <>
              <p>Don't have an account?</p>{" "}
              <Link to="/auth/signup">Sign Up</Link>
            </>
          )}
        </div>
      </Form>
    </div>
  );
};

export default AuthForm;
