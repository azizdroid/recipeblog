import React, { useState } from "react";

function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  console.log(email);
  return (
    <div>
      <input
        value={email}
        onChange={(e) => {
          setemail(e.target.value);
        }}
      ></input>
      <button>EMAIL</button>
      <br />

      <input
        value={password}
        onChange={(e) => {
          setpassword(e.target.value);
        }}
      ></input>
      <button>PASSWORD</button>
    </div>
  );
}

export default Login;
