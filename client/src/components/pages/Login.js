import React, { useReducer, useState, useEffect } from "react";

import { connect } from "react-redux";
import PropTypes from "prop-types";

import { login } from "../../actions/authActions";
import { clearErrors } from "../../actions/errorActions";
import { Link, withRouter } from "react-router-dom";
import logo2 from "../../images/logo2.png";

function Login({ error, isAuthenticated, login, history, clearErrors }) {
  const [loginForm, setLoginForm] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      email: "",
      password: "",
      alertMessage: "",
    }
  );

  const onSubmit = () => {
    const { email, password } = loginForm;

    const user = {
      email,
      password,
    };

    //Attempt to login
    login(user);
  };

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/dashboard");
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (error.id !== null) {
      //alert(error.msg.msg)
    }
  }, [error]);

  useEffect(() => {
    clearErrors();
  }, []);

  useEffect(() => {
    console.log(history);
    if (error.id === "LOGIN_FAIL") {
      setLoginForm({ alertMessage: error.msg.msg });
    } else {
      setLoginForm({ alertMessage: undefined });
    }
  }, []);

  return (
    <>
      <div
        className="loginDiv"
        style={{
          backgroundColor: "#007bff",
        }}
      >
        <div className="loginLogoDiv">
          <img
            src={logo2}
            alt="Logo"
            style={{
              display: "block",
              marginRight: "auto",
              marginLeft: "auto",
              marginBottom: "-80px",
              marginTop: "-200px",
              width: "25%",
            }}
          />
        </div>

        <form className="loginForm">
          {error.id !== null ? (
            <div
              style={{
                marginBottom: "20px",
                textAlign: "center",
                color: "white",
                backgroundColor: "red",
                opacity: "60%",
                borderRadius: "10px",
              }}
            >
              {error.msg.msg}
            </div>
          ) : (
            <h5 style={{ marginBottom: "20px", textAlign: "center" }}></h5>
          )}

          <h4 style={{ marginBottom: "20px", textAlign: "center" }}>
            Log into your account
          </h4>
          <div className="form-group text-left">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={loginForm.email}
              onChange={(e) => setLoginForm({ email: e.target.value })}
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group text-left">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              value={loginForm.password}
              onChange={(e) => setLoginForm({ password: e.target.value })}
              id="password"
              placeholder="Password"
            />
          </div>
          <div
            className="btn btn-primary"
            style={{ width: "100%" }}
            onClick={() => onSubmit()}
          >
            Login
          </div>

          <hr className="solid" />

          <Link
            to="#"
            style={{
              fontSize: "13px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            Reset your password!
          </Link>
          <Link
            to="/register"
            style={{
              fontSize: "13px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            Create an account!
          </Link>
        </form>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
});

Login.propTypes = {
  isAuthenticated: PropTypes.bool,
  error: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { login, clearErrors })(
  withRouter(Login)
);
