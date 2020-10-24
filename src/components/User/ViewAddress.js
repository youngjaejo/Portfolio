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
class ViewAddress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: this.emptyitem,
    };
  }
  remove(id) {
    const user = JSON.parse(localStorage.getItem("user"));
    axios({
      method: "delete",
      url: `/user/deleteAddress/${id}`,
      headers: { Authorization: "Bearer " + user.accessToken },
    }).then(() => {
      //   let updateBook = [...this.state.books].filter((i) => i.id !== id);
      //   this.setState({ books: updateBook });
      window.location.reload(false);
    });
  }
  render() {
    let rows = this.props.addresses.map((user) => (
      <tr>
        <td>{user.address}</td>
        <td>{user.city}</td>
        <td>{user.state}</td>
        <td>{user.zipCode}</td>
        <td>
          <Button size="sm" color="danger" onclick={() => this.remove()}>
            Delete
          </Button>
        </td>
      </tr>
    ));
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Address</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table className="mt-4">
            <thead>
              <tr>
                <th>Address</th>
                <th>City</th>
                <th>State</th>
                <th>Zipcode</th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </Table>
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

export default ViewAddress;
