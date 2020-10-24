import React, { Component } from "react";
import axios from "axios";
import {
  Button,
  Table,
  Container,
  Input,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import bookProject from "../image/BookProject.jpg";
import mypic from "../image/mypic.jpg";
import personalPF from "../image/portpolio.jpg";
class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div id="aboutme_background">
          <div id="aboutme_table">
            <h2>About Me</h2>

            <Table>
              <tr id="aboutme_row">
                <td id="row-1-aboutme">
                  <img src={mypic} id="myPicrue"></img>
                </td>
                <td id="row-1-2-aboutme">
                  <span id="about-me">
                    Recently, I graduated with a Bachelor's degree in Computer
                    Science and am seeking an internship or entry-level
                    oppertunity with a company using my experience in building
                    full stack software developments. I am motivated by
                    challenges and enjoy problem solving and analysis. I am
                    passionate about creating and acquiring skills regarding new
                    technologies.
                  </span>
                </td>
              </tr>
            </Table>
          </div>
        </div>
        <div id="Project_background">
          <div id="Project_table">
            <h2>Projects</h2>
            <br />
            <Table>
              <tr id="row">
                <td id="row-1">
                  <h4>Peronal Portfolio</h4>
                  <div id="row-1-1">
                    <a href="/yj">
                      {/* <img src={bookProject} id="Project_bookImg" /> */}
                      <div class="container">
                        <img
                          src={personalPF}
                          alt="Avatar"
                          class="image-portfolio"
                        />
                        <div class="overlay">
                          <div class="text">Click To Move</div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <a
                    href="https://github.com/youngjaejo/React_JS_book_store/tree/master/my-app"
                    id="giticon"
                  >
                    <i class="fa fa-github-square" id="sorcecode">
                      SourceCode
                    </i>
                    <br />
                  </a>
                  <h6>Technologies Used</h6>
                  <td id="row-1-skills-1">
                    <span>
                      - Frontend: React JS , HTML5, CSS3
                      <br />
                      - Backend: Java (spring Framework)
                      <br />
                    </span>
                  </td>
                  <td id="row-1-skills-2"></td>
                </td>
                <td id="row-1-2">
                  <h5>Overview</h5>
                  <span>
                    Simple React project to show my portfolio of work. I used
                    ReatJS to build it.
                  </span>

                  <h5>
                    <br />
                    Efforts For The Project
                  </h5>
                  <span>
                    1. I tried to make the website easy for users to see and not
                    to make it complicated.
                    <br />
                    2. In order to place each element in the location I want, I
                    referenced and designed the CSS of other websites.
                  </span>
                </td>
              </tr>
              <tr id="row">
                <td id="row-1">
                  <h4>Full Stack Book Store App</h4>
                  <div id="row-1-1">
                    <a href="/bookApp/books">
                      {/* <img src={bookProject} id="Project_bookImg" /> */}
                      <div class="container">
                        <img src={bookProject} alt="Avatar" class="image" />
                        <div class="overlay">
                          <div class="text">Click To Move</div>
                        </div>
                      </div>
                    </a>
                  </div>

                  <UncontrolledDropdown>
                    <DropdownToggle size="sm" color="white">
                      <i class="fa fa-github-square" id="sorcecode">
                        Source Code ↓
                      </i>
                      <br />
                    </DropdownToggle>
                    <DropdownMenu id="gitDropDown">
                      <DropdownItem>
                        <a
                          href="https://github.com/youngjaejo/React_JS_book_store/tree/master/my-app"
                          id="giticon"
                        >
                          Front End(React JS){" "}
                        </a>
                      </DropdownItem>
                      <DropdownItem>
                        <a
                          href="https://github.com/youngjaejo/Backend_Spring_Boot_AWS/tree/master/backend"
                          id="giticon"
                        >
                          Back End(Java)
                        </a>
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>

                  <h6>Technologies Used</h6>
                  <td id="row-1-skills-1">
                    <span>
                      - Frontend: React JS
                      <br />
                      - Backend: Java (spring Framework)
                      <br />
                      - Database: Mysql (RDS from AWS)
                      <br />
                      - Public Cloud Storage: S3 (AWS)
                      <br />
                    </span>
                  </td>
                  <td id="row-1-skills-2">
                    <span>
                      - Skills: MVC Architecture, JWT,
                      <br />
                      &emsp;&emsp;&emsp; Hibernate, Rest API, Spring
                      &emsp;&emsp;&emsp; Security
                    </span>
                  </td>
                </td>
                <td id="row-1-2">
                  <h5>Explanation</h5>
                  <span>
                    1. I created three separate authentication functions
                    (SUPER_USER, ADMIN_USER, SITE_USER) and enhanced E@E
                    security using Spring Security. Users are enabled to create
                    and account and sign in using "SITE_USER" which is verified
                    through email.
                    <br />
                    2. The server issues JWT Token and provides it to the User
                    at login, which reduces traffic pressure on the server.
                    <br />
                    3. I created REST API (POST, GET, PUT, PATCH, DELETE) to use
                    CRUD functions. Image files of books are stored in a public
                    S3 Bucket from AWS. All data is stored and trasferd through
                    Cloud Database (RDS).
                  </span>

                  <h5>
                    <br />
                    Project Difficulties
                  </h5>
                  <span>
                    1. It was hard how jwt token transfer between front and
                    backend.
                    <br />
                    Solution: When front send HTTP requests to server, token
                    should be included in headers.
                    <br />
                    2. It was difficult save Addresses individual account.
                    <br />
                    Solution: javax provides relational database annotations
                    (@ManyToMany, @OneToMany, ManyToOne) and it should be use
                    HashSet
                  </span>
                </td>
              </tr>
            </Table>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
