import React, { Component } from "react";
import axios from "axios";
import { Button } from "reactstrap";
class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  remove(id) {
    const user = JSON.parse(localStorage.getItem("user"));
    axios({
      method: "delete",
      url: `/user/deleteABook/${id}`,
      headers: { Authorization: "Bearer " + user.accessToken },
    }).then(() => {
      //   let updateBook = [...this.state.books].filter((i) => i.id !== id);
      //   this.setState({ books: updateBook });
      window.location.reload(false);
    });
  }

  render() {
    const img = `https://elasticbeanstalk-us-west-1-338406428407.s3-us-west-1.amazonaws.com/image/${this.props.img_name}`;

    return (
      <tr>
        <td>
          <img src={img} width="100" height="150" alt="profile" />
        </td>
        <td>
          <h4>{this.props.title}</h4>
          ISBN: {this.props.isbn}
          <br />
          Author:{this.props.author}
        </td>
        <td>${this.props.price}</td>
        <td>{this.props.quantity}</td>
        <td>
          <Button
            size="sm"
            color="danger"
            onClick={() => this.remove(this.props.id)}
          >
            Delete
          </Button>
        </td>
      </tr>
    );
  }
}

export default Items;
