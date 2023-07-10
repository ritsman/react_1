import React, { Component } from "react";
import { Menu, Image } from "semantic-ui-react";
import img_lion from "./img88/lionking.png";

export default class MenuBar extends Component {
  state = {};

  handleItemClick = (e, { name }) => {
    console.log(name);
    this.setState({ activeItem: name, color: "green" });
  };
  render() {
    const { activeItem } = this.state;

    return (
      <Menu className="cust-menu" color="grey" inverted>
        <Menu.Item
          name="editorials"
          active={activeItem === "editorials"}
          color={this.state.color}
          onClick={this.handleItemClick}
        >
          Editorials
        </Menu.Item>

        <Menu.Item
          name="reviews"
          active={activeItem === "reviews"}
          color={this.state.color}
          onClick={this.handleItemClick}
        >
          Reviews
        </Menu.Item>

        <Menu.Item
          name="upcomingEvents"
          active={activeItem === "upcomingEvents"}
          onClick={this.handleItemClick}
        >
          Upcoming Events
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>
            <Image src={img_lion} avatar />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}
