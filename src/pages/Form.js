import React, { useEffect, useState } from "react";
import "../styles/Login.css";
import { Alert, Container } from "react-bootstrap";

function Form() {
  //values to check user name

  let user = "parvez@gmail.com";
  let myPassword = "12341234";

  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [msg, setMsg] = useState("");

  //hide messages
  useEffect(() => {
    const timeId = setTimeout(() => {
      // After 3 seconds set the show value to false
      setMsg("");
    }, 5000);

    return () => {
      clearTimeout(timeId);
    };
  }, [msg]);

  const handleSubmit = () => {
    if (!email || !password) {
      setMsg("Please Enter all the values");
    } else if (email !== "parvez@gmail.com" || password !== "12341234") {
      setMsg("Please Enter all the values");
    }
  };

  return (
    <Container>
      <div className="my-2">
        <div className="row g-0">
          <div className="d-none d-md-flex my-5 col-md-4 col-lg-6 bg-image"></div>
          <div className="col-md-8 col-lg-6">
            <div className="login d-flex align-items-center py-md-5 py-sm-1">
              <div className="container">
                <div className="row">
                  <div className="col-md-9 col-lg-10 mx-auto">
                    <form style={{ marginTop: "10%" }}>
                      <h2 className="login-heading my-4 text-white">
                        Please fill the confirm
                      </h2>
                      {msg ? <Alert variant="secondary">{msg}</Alert> : ""}

                      <div className="form-floating mb-3">
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          id="floatingInput"
                          placeholder="Email Address"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <label htmlFor="floatingInput">Email address</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          type="password"
                          name="password"
                          className="form-control"
                          id="floatingPassword"
                          placeholder="Password"
                          required
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <label htmlFor="floatingPassword">Password</label>
                      </div>

                      <div className="d-grid">
                        <button
                          className="btn btn-lg btn-success btn-login text-uppercase fw-bold mb-2"
                          onClick={handleSubmit}
                        >
                          Sign In
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Form;
