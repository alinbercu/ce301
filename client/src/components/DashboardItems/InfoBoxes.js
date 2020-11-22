import React, { useState, useEffect } from "react";

import { connect } from "react-redux";
import PropTypes from "prop-types";

import style from "./InfoBoxes.css";

function InfoBoxes({ auth }) {
  const { isAuthenticated, user } = auth;

  return (
    <>
      <h2 style={{ marginLeft: "35px", marginTop: "25px" }}>Dashboard</h2>
      <div className="boxWrapper">
        <div className="welcomeBox">
          <p>
            Welcome <br /> {user ? `${user.name}` : ""}
          </p>
        </div>

        <div className="welcomeBox">
          <p>Welcome</p>
          <p>username</p>
        </div>

        <div className="welcomeBox">
          <p>Welcome</p>
          <p>username</p>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

InfoBoxes.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, {})(InfoBoxes);
