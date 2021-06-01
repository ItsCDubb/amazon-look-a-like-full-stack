import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase";
import "./Login.css";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (event) => {
    //   Stops page from refreshing
    event.preventDefault();
    // Some fancy firebase login stuff
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };
  const register = (event) => {
    event.preventDefault();
    //   Some fancy firebase registration stuff
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // Successfully created a new user
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>Email</h5>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button
            className="login__signInButton"
            type="submit"
            onClick={signIn}
          >
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to the Amazon look-a-likes's{" "}
          <strong>Conditions of Use</strong> & <strong>Sale</strong>. Please see
          our <strong>Privacy</strong> Notice, our <strong>Cookies</strong>{" "}
          Notice and our
          <strong>Interest-Based Ads</strong> Notice.
        </p>
        <button
          className="login__registerButton"
          type="submit"
          onClick={register}
        >
          Create account
        </button>
      </div>
    </div>
  );
}

export default Login;
