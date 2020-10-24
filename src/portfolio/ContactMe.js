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
class ContactMe extends Component {
  emptyitem = {
    name: "",
    pNumber: "",
    email: "",
    msg: "",
  };
  constructor(props) {
    super(props);
    this.state = {
      item: this.emptyitem,
    };
    this.handleItem = this.handleItem.bind(this);
    this.handleVcode = this.handleVcode.bind(this);
  }
  handleItem(event) {
    this.emptyitem[event.target.name] = event.target.value;
    // console.log(this.emptyitem[event.target.name]);
  }
  handleVcode() {
    const { item } = this.state;
    const user = JSON.parse(localStorage.getItem("user"));
    axios({
      method: "post",
      url: "/api/contactme",
      headers: {},
      data: {
        name: this.state.item.name,
        phoneNumber: this.state.item.pNumber,
        email: this.state.item.email,
        msg: this.state.item.msg,
      },
    });
  }

  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Contact Me
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.handleVcode}>
            <FormGroup>
              <Label>Full Name</Label>
              <Input type="text" name="name" onChange={this.handleItem} />
            </FormGroup>
            <FormGroup>
              <Label>Phone Number</Label>
              <Input type="text" name="pNumber" onChange={this.handleItem} />
            </FormGroup>
            <FormGroup>
              <Label>Email</Label>
              <Input type="text" name="email" onChange={this.handleItem} />
            </FormGroup>
            <FormGroup>
              <Label>Message</Label>
              <Input
                type="textarea"
                name="msg"
                onChange={this.handleItem}
                id="Text-box-size"
              />
            </FormGroup>

            <Button variant="primary" type="submit" onClick={this.props.onHide}>
              Send
            </Button>
          </Form>
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

export default ContactMe;
