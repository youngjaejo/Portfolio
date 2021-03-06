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
import Vertification from "./User/Vertification";
class register extends Component {
  emptyitem = {
    id: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: "",
  };
  constructor(props) {
    super(props);
    this.state = {
      item: this.emptyitem,
      vertifyShow: false,
      randomNum: "",
    };
    this.handleItem = this.handleItem.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.handleVcode = this.handleVcode.bind(this);
  }
  handleItem(event) {
    this.emptyitem[event.target.name] = event.target.value;
  }
  handleVcode() {
    this.state.randomNum = Math.floor(Math.random() * 999999) + 123456;
    this.setState({ vertifyShow: true });
    const user = JSON.parse(localStorage.getItem("user"));
    axios({
      method: "post",
      url: "/api/sendEmail",
      headers: {},
      data: {
        email: this.state.item.email,
        number: this.state.randomNum,
      },
    });
  }

  render() {
    let vertifyShowClose = () => this.setState({ vertifyShow: false });

    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Add Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Label>First Name</Label>
          <Input type="text" name="firstName" onChange={this.handleItem} />

          <Label>Last Name</Label>
          <Input type="text" name="lastName" onChange={this.handleItem} />
          <Label>Phon Number</Label>
          <Input
            type="text"
            name="phoneNumber"
            onChange={this.handleItem}
          ></Input>
          <Label>Email</Label>
          <Input type="text" name="email" onChange={this.handleItem} />

          <Label>Password</Label>
          <Input type="password" name="password" onChange={this.handleItem} />

          <Button variant="primary" onClick={this.handleVcode}>
            Submit
          </Button>
          <Vertification
            show={this.state.vertifyShow}
            onHide={vertifyShowClose}
            firstName={this.state.item.firstName}
            lastName={this.state.item.lastName}
            phoneNumber={this.state.item.phoneNumber}
            email={this.state.item.email}
            password={this.state.item.password}
            randomNum={this.state.randomNum}
          />
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

export default register;
