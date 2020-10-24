import React, { Component } from "react";
import { Table, Container, Input } from "reactstrap";
import axios from "axios";
import Items from "./Items";
import User from "../User/User";
class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      total: 0,
    };
  }
  async componentDidMount() {
    const user = JSON.parse(localStorage.getItem("user"));
    axios({
      method: "get",
      url: "/user/getCart",
      headers: { Authorization: "Bearer " + user.accessToken },
    }).then((res) => {
      this.setState({ user: res.data.cart });
      var user = this.state.user;
      var total = 0;
      for (var i = 0; i < user.length; i++) {
        total += user[i].price;
      }

      this.setState({ total: total });
    });
  }

  TotalPrice() {
    var user = this.state.user;
    var total = 0;
    for (var i = 0; i < user.length; i++) {
      total += user.price;
    }
    this.state.total = total;
  }

  render() {
    console.log(this.state.user[0]);
    const { user, total } = this.state;
    console.log(user);
    let item = user.map((element) => (
      <Items
        id={element.id}
        img_name={element.img_name}
        isbn={element.isbn}
        author={element.author}
        title={element.title}
        price={element.price}
        quantity={element.quantity}
      />
    ));
    return (
      <Container>
        <Table className="mt-4">
          <thead>
            <tr>
              <th width="30%"></th>
              <th width="30%">Book Info</th>
              <th width="15%">Price</th>
              <th width="15%">Quantity</th>
            </tr>
          </thead>
          {item}
          <tr>
            <th width="30%"></th>
            <th width="30%"></th>
            <th width="15%">Total: ${total}</th>
            <th width="15%"></th>
          </tr>
        </Table>
      </Container>
    );
  }
}

export default Cart;
