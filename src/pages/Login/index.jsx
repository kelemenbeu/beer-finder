import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../actions";
import { ReactComponent as Logo } from "../../beer-solid.svg";
import background from "../../beer.jpg"

function Login() {
  const [input, setInput] = useState({
    username: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const { username } = input;
  const loggingIn = useSelector(state => state.authentication.loggingIn);
  const dispatch = useDispatch();

  // reset login status
  useEffect(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  function handleChange(e) {
    const { name, value } = e.target;
    setInput(input => ({ ...input, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    setSubmitted(true);
    if (username) {
      dispatch(userActions.login(username));
    }
  }

  return (
    <div className="container-fluid min-vh-100" style={{background: `url(${background}) no-repeat center center fixed`}}>
      <div className="row justify-content-center align-items-center">
        <div className="col-8 col-md-6 col-lg-4">
          <div
            className="card bg-light"
            style={{ border: "none", marginTop: "50%" }}
          >
            <div className="card-header">
              <Logo style={{ height: "3rem", width: "auto" }} />
            </div>
            <form
              name="form"
              onSubmit={handleSubmit}
              style={{
                width: "100%",
                maxWidth: "330px",
                padding: "15px",
                margin: "auto"
              }}
            >
              <h2 className="h3 mb-3 font-weight-normal">Please sign in</h2>
              <div className="form-group">
                <label>Username</label>
                <input
                  type="text"
                  name="username"
                  maxLength="16"
                  value={username}
                  onChange={handleChange}
                  className={
                    "form-control" +
                    (submitted && !username ? " is-invalid" : "")
                  }
                />
                {submitted && !username && (
                  <div className="invalid-feedback">Username is required</div>
                )}
              </div>
              <div className="form-group">
                <button className="btn btn-secondary">
                  {loggingIn && (
                    <span className="spinner-border spinner-border-sm mr-1"></span>
                  )}
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Login };
