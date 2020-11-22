import React, { useState, useEffect, Fragment } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  DropdownOpen,
  UncontrolledDropdown,
} from "reactstrap";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import MailLogo from "../../images/mail.svg";
import style from "./AppSidebar.css";

import { Link } from "react-router-dom";

//const toggle = () => setDropdownOpen(!dropdownOpen);

function AppSidebar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <Nav vertical color="dark">
      <NavbarBrand
        href="/"
        className="logoNavbar"
        style={{
          marginTop: "25px",
          marginBottom: "25px",
          display: "block",
          marginRight: "auto",
          marginLeft: "auto",
          color: "white",
        }}
      >
        EASY
        <img
          src={MailLogo}
          style={{
            height: 40,
            marginRight: "7px",
            marginLeft: "7px",
          }}
          alt="MailLogo"
        />
        SMS
      </NavbarBrand>
      <NavItem className="mb-3">
        <NavLink href="/dashboard">Dashboard</NavLink>
      </NavItem>
      <NavItem className="mb-3">
        <NavLink href="/order">Order SMS</NavLink>
      </NavItem>
      <NavItem className="mb-3">
        <NavLink href="/balance">Add balance</NavLink>
      </NavItem>
      <NavItem className="mb-3">
        <NavLink href="#">Support</NavLink>
      </NavItem>
      <NavItem className="mb-3">
        <NavLink href="#">Live Chat</NavLink>
      </NavItem>
      <NavItem className="mb-3">
        <NavLink href="#">API</NavLink>
      </NavItem>
    </Nav>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

AppSidebar.propTypes = {
  auth: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, {})(AppSidebar);
