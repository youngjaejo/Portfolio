import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import axios from "axios";
import {
  Table,
  Container,
  Input,
  Button,
  Label,
  FormGroup,
  Form,
} from "reactstrap";
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";

class AddUser extends Component {
  emptyitem = {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      item: this.emptyitem,
      notMaching: false,
    };
  }

  render() {
    return (
      <div>
        <Modal {...this.props}>
          <Modal.Header closeButton>
            <Modal.Title>Login Requirement</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Label>You need to login for it</Label>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.onHide}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default AddUser;
