import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import AuthService from "../services/auth.service";
import PortFolioNav from "./PortfolioNav";
import Botton from "./info_boutton";
import Project from "./project";

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { currentUser, superUser, adminUser } = this.state;

    return (
      <div>
        <PortFolioNav />

        <Project />
        <Router></Router>
        <Botton />
      </div>
    );
  }
}

export default Portfolio;
