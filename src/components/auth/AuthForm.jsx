import React from "react";

import "./AuthForm.css";
import { Form, Link } from "react-router-dom";

import Logo from "../../assets/images/logo.svg";

const AuthForm = ({ mode }) => {
  // let formHeight = "50%";
  // let buttonHeight = "100%";

  // if (mode === "signup") {
  //   formHeight = "65%";
  //   buttonHeight = "90%";
  // }

  return (
    <div className="entertainment__auth-container" method="post">
      <div className="entertainment__auth-logo-container">
        <img src={Logo} alt={Logo} />
      </div>
      <Form
        className="entertainment__auth-form-container"
        
      >
        {mode === "signup" ? <h1>Sign Up</h1> : <h1>Login</h1>}
        {/*Show the part that is commented out conditionally when an error has been detected*/}
        {/* <div className="entertainment__auth-form-email-container-error">
          <input type="email" name="email" placeholder="Email address" />
          <div className="entertainment__auth-form-email-error-msg-container">
            <p>Can't be empty</p>
          </div>
        </div> */}
        <div className="entertainment__auth-form-email-container">
          <input
            className="entertainment__auth-form-email-input"
            type="email"
            name="email"
            placeholder="Email address"
          />
        </div>
        {/* <div className="entertainment__auth-form-password-container-error">
          <input type="password" name="password" placeholder="Password" />
          <div className="entertainment__auth-form-password-error-msg-container">
            <p>Can't be empty</p>
          </div>
        </div> */}
        <div className="entertainment__auth-form-password-container">
          <input
            className="entertainment__auth-form-password-input"
            type="password"
            name="password"
            placeholder="Password"
          />
        </div>
        {mode === "signup" && (
          <div className="entertainment__auth-form-repeat-password-container">
            <input
              className="entertainment__auth-form-password-input"
              type="password"
              name="password"
              placeholder="Repeat password"
            />
          </div>
        )}
        {/* <div className="entertainment__auth-form-repeat-password-container-error">
          <input type="password" name="password" placeholder="Repeat password" />
          <div className="entertainment__auth-form-repeat-password-error-msg-container">
            <p>Can't be empty</p>
          </div>
        </div> */}

        <div className="entertainment__auth-form-button-container">
          <button >
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
