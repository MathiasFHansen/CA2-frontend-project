import React, { useState, useEffect } from "react";

export default function Home({
  facade,
  setLoggedIn,
  setErrorMessage,
  logout,
  loggedIn,
}) {
  const initialState = { username: "", password: "" };
  const [login, setLogin] = useState(initialState);

  const changeName = (event) => {
    //console.log([event.target.name])
    setLogin({
      ...login,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(login);

    facade.login(login.username, login.password, setLoggedIn, setErrorMessage);
    console.log(setErrorMessage);

    setLogin(initialState);
  };

  return (
    <div class="text-center">
      <h2>Home</h2>
      <form onSubmit={handleSubmit}>
        <label>
          User Name:
          <br />
          <input
            type="text"
            name="username"
            value={login.username}
            onChange={changeName}
          />
          <br />
          Password:
          <br />
          <input
            type="text"
            name="password"
            value={login.password}
            onChange={changeName}
          />
        </label>
        <br />
        <button type="submit" class="btn btn-primary">
          Login
        </button>
        {facade.hasUserAccess("user", loggedIn) && (
          <button class="btn btn-primary" onClick={logout}>
            Logout
          </button>
        )}
        {facade.hasUserAccess("admin", loggedIn) && (
          <button class="btn btn-primary" onClick={logout}>
            Logout
          </button>
        )}
        <p>Role: {facade.getUserRoles()}</p>
      </form>
    </div>
  );
}
