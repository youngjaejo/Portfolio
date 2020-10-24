import React, { Component } from "react";
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
import { Button, ButtonToolbar } from "react-bootstrap";
import AuthService from "../services/auth.service";
import java from "../image/java.png";
import spring from "../image/spring.png";
import hcj from "../image/HCJ.jpg";
import react from "../image/reactjs.png";
import mysql from "../image/mysql.png";
import aws from "../image/aws.png";
import Reume from "./resume";
import ContactMe from "./ContactMe";
class PortfolioNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addModalShow: false,
      contackMeShow: false,
    };
  }

  render() {
    const { currentUser, superUser, adminUser } = this.state;
    let addModelClose = () => this.setState({ addModalShow: false });
    let contackMeShow = () => this.setState({ contackMeShow: false });
    return (
      <div>
        <div class="backGroundImg">
          <div class="backGroundFilter">
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
            ></link>
            <Navbar light expand="md" id="nav">
              <div id="mainHeader">
                <NavbarBrand href="/yj" id="text-main">
                  Youngjae's Portfolio
                </NavbarBrand>
              </div>
              <div id="text-nav0">
                <Nav className="ml-auto">
                  {/* <NavItem>
                  <NavLink href="/bookApp" id="text-nav">
                    Book
                  </NavLink>
                </NavItem> */}
                  <NavItem>
                    <NavLink href="#Project_background" id="text-nav">
                      Projects
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#aboutme_background" id="text-nav">
                      About Me
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      id="text-nav"
                      onClick={() => this.setState({ contackMeShow: true })}
                    >
                      Contact Me
                    </NavLink>
                    <ContactMe
                      show={this.state.contackMeShow}
                      onHide={contackMeShow}
                    />
                  </NavItem>
                </Nav>
              </div>
            </Navbar>
            <h2 id="jobTitle">Software Developer</h2>
            <div id="icon_link">
              <tr>
                <th id="icons_table">
                  <a
                    href="https://www.linkedin.com/in/youngjae-jo/"
                    id="icons_text"
                  >
                    <i class="fa fa-linkedin-square" id="icons"></i>
                    <br />
                    Linkedin
                  </a>
                </th>
                <th id="icons_table">
                  <a href="https://github.com/youngjaejo" id="icons_text">
                    <i class="fa fa-github-square" id="icons"></i>
                    <br />
                    Github
                  </a>
                </th>
                <th id="icons_table">
                  <a
                    id="icons_text"
                    onClick={() => this.setState({ addModalShow: true })}
                  >
                    <i class="fa fa-book" id="icons"></i>
                    <br />
                    Resume
                  </a>
                  <Reume
                    show={this.state.addModalShow}
                    onHide={addModelClose}
                  />
                </th>
              </tr>
            </div>
          </div>
        </div>
        <div id="icon_skil">
          <img id="Icon_java" src={java} />
          <img id="Icon_Spring" src={spring} />
          <img id="Icon_HCJ" src={hcj} />
          <img id="Icon_react" src={react} />
          <img id="Icon_mysql" src={mysql} />
          <img id="Icon_aws" src={aws} />
        </div>
      </div>
    );
  }
}

export default PortfolioNav;
