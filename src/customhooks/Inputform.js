import React, { useState } from "react";
import userInput from "./useInput";
const Inputform = () => {
  const [username, setUsername, resetUsername] = userInput();
  const [password, setpassword, resetpassword] = userInput();
  const handlesubmit = (event) => {
    event.preventDefault();
    console.log(username);
    console.log(password);
    resetUsername();
    resetpassword();
  };

  const handleusernamechange = (event) => {
    setUsername(event.target.value);
  };

  const handlepasswordchange = (event) => {
    setpassword(event.target.value);
  };

  return (
    <form onSubmit={handlesubmit}>
      <div>
        <label>Username</label>
        <input
          placeholder="Username"
          type="text"
          onChange={handleusernamechange}
          value={username}
        ></input>
      </div>

      <div>
        <label>Password</label>
        <input
          placeholder="Password"
          type="text"
          onChange={handlepasswordchange}
          value={password}
        ></input>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Inputform;
