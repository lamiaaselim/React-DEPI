import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const handelerEmail = (e) => {
    setEmail(e.target.value);
  };
  const handelerPassword = (e) => {
    setPassword(e.target.value);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (!hasError(email, password)) {
      console.log({ email, password });
      navigate("/");
    }
  };

  const hasError = (email, password) => {
    const errors = {};
    if (!email.match(/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/)) {
      errors.email = "Invalid email format";
    }
    if (password.length < 8) {
      errors.password = "Password must be at least 8 characters long";
    }
    setError(errors);
    return Object.keys(errors).length;
  };
  return (
    <>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <form onSubmit={handlerSubmit} noValidate>
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
                  onChange={handelerEmail}
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
                  onChange={handelerPassword}
                />
                {error.password && (
                  <div id="passwordHelp" className="form-text text-danger">
                    {error.password}
                  </div>
                )}
              </div>

              <div className="mb-5 d-grid">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
