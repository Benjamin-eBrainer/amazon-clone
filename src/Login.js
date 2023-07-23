import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [, dispatch] = useStateValue();

  const createAccount = (e) => {
    e.preventDefault();
    dispatch({
      type: "SET_USER",
      payload: {
        username,
        password,
      },
    });
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="header__logo login__logo"
          src="amazon-dark-logo.png"
          alt="Amazon Logo"
        />
      </Link>
      <div className="login__box">
        <h1>Sign-in</h1>
        <form className="login__form">
          <div className="login__formInput">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Link to="/" className="login__button">
            Sign In
          </Link>
          <p>
            By signing-in you agree to Amazon's Conditions of Use & Sale. Please
            see our Privacy Notice, our Cookies Notice and our interest-Based
            Ads Notice.
          </p>
          <button className="login__button" onClick={createAccount}>
            Create your Amazon Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
