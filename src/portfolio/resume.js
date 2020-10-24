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
import resume from "../image/resme.jpg";
class Resume extends Component {
  emptyitem = {
    id: this.props.id,

    address: "",
    city: "",
    state: "",
    zipcode: "",
  };
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <img src={resume}></img>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={this.props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default Resume;
