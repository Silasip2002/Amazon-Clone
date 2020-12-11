import React, { useState } from "react";
import "../Login/Login.css";
import { auth } from "../../firebase";
import { Link, useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (event) => {
    event.preventDefault(); // stop refresh
    //do the login logic...
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        //logged in , redirect to home page....
        history.push("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const register = (event) => {
    event.preventDefault(); // stop refresh
    //do the register logic...
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // registered an new account and redirect to home page.
        history.push("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <>
      <div className="login">
        <Link to="/">
          <img
            className="login__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
            alt=""
          ></img>
        </Link>

        <div className="login__container">
          <h1>Sign in</h1>
          <form>
            <h5>E-mail</h5>
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type="email"
            ></input>
            <h5>Password</h5>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            ></input>
            <button className="btn__amazon" onClick={login} type="submit">
              Sign In
            </button>
          </form>
          <p>
            By Singing-in you agree to Amazon's Condition of Use & Sale. Please
            see our Privacy Notice, our Cookies Notice and our Interest-based Ad
            Notice.
          </p>
          <button onClick={register}>Create your Amazon Account</button>
        </div>
      </div>
    </>
  );
}

export default Login;
