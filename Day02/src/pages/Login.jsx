import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const handlerEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlerPassword = (e) => {
    setPassword(e.target.value);
  };
  const sumbitHandler = (e) => {
    if (hasErrors(email, password)) {
      e.preventDefault();
      console.log(error.email);
      console.log(error.password);
    } else {
      console.log({ email, password });
      navigate("/");
    }
  };

  const hasErrors = (email, password) => {
    const errors = {};
    if (!email.match(/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/)) {
      errors.email = "Invalid email";
    }
    if (password.length < 8) {
      errors.password = "Invalid password";
    }
    setError(errors);
    return Object.keys(errors).length;
  };

  return (
    <>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <form onSubmit={sumbitHandler} noValidate>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={email}
                  onChange={handlerEmail}
                />
                {error.email && (
                  <div id="emailHelp" className="form-text text-danger">
                    {error.email}
                  </div>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  value={password}
                  onChange={handlerPassword}
                />
                {error.password && (
                  <div id="passwordHelp" className="form-text text-danger">
                    {error.password}
                  </div>
                )}
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
