import React, { useReducer, useEffect } from "react";
import { Container } from "reactstrap";
import ShoppingList from "../ShoppingList";
import ItemModal from "../ItemModal";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { register } from "../../actions/authActions";
import { clearErrors } from "../../actions/errorActions";
import { Link, withRouter } from "react-router-dom";

import logo2 from "../../images/logo2.png";

function Register({ error, isAuthenticated, register }) {
  const [registerForm, setRegisterForm] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      name: "",
      email: "",
      password: "",
      alertMessage: "",
    }
  );

  const onSubmit = () => {
    const { name, email, password } = registerForm;

    //Create user object
    const newUser = {
      name,
      email,
      password,
    };

    //Attempt to register
    register(newUser);
  };

  return (
    <div
      className="registerDiv"
      style={{
        backgroundColor: "#007bff",
      }}
    >
      <div className="registerLogoDiv">
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

      <form className="registerForm">
        <h4 style={{ marginBottom: "20px", textAlign: "center" }}>
          Register your account
        </h4>
        <div className="form-group text-left">
          <label htmlFor="exampleInputName1">Name</label>
          <input
            type="name"
            className="form-control"
            id="name"
            value={registerForm.name}
            onChange={(e) => setRegisterForm({ name: e.target.value })}
            placeholder="Enter name"
          />
        </div>
        <div className="form-group text-left">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={registerForm.email}
            onChange={(e) => setRegisterForm({ email: e.target.value })}
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
            id="password"
            value={registerForm.password}
            onChange={(e) => setRegisterForm({ password: e.target.value })}
            placeholder="Password"
          />
        </div>
        <div
          className="btn btn-primary"
          style={{ width: "100%" }}
          onClick={() => onSubmit()}
        >
          Register
        </div>

        <hr className="solid" />

        <Link
          to="/login"
          style={{
            fontSize: "13px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Login page
        </Link>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
});

Register.propTypes = {
  isAuthenticated: PropTypes.bool,
  error: PropTypes.object.isRequired,
  register: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { register, clearErrors })(Register);
