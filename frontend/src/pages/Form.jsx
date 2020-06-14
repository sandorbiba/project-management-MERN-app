import React, { useState } from "react";
import Login from "../components/Login";
import Register from "../components/Register";

const Form = () => {
  const [state, setstate] = useState(true);

  return (
    <div>
      {state ? <Login /> : <Register />}
      <button onClick={() => setstate(!state)}>
        {state ? "Register" : "Login"}
      </button>
    </div>
  );
};

export default Form;
