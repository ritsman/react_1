import "semantic-ui-css/semantic.min.css";

import React, { useState } from "react";
import {
  Checkbox,
  Grid,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
} from "semantic-ui-react";

import { Outlet, Link } from "react-router-dom";
import Home from "../pages/Home";
const SidebarEx = (props) => {
  console.log(props);
  const [visible, setVisible] = React.useState(false);
  const [activeItem, setActiveItem] = useState("");
  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
  };

  return (
    <Grid columns={1}>
      <Grid.Column>
        <Checkbox
          checked={visible}
          label={{ children: <code>visible</code> }}
          onChange={(e, data) => setVisible(data.checked)}
        />
      </Grid.Column>

      <Grid.Column>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation="overlay"
            icon="labeled"
            inverted
            onHide={() => setVisible(false)}
            vertical
            visible={visible}
            width="thin"
          >
            <Menu.Item as={Link} to="Home" onClick={setActiveItem}>
              <Icon name="globe" />
              Home
            </Menu.Item>
            <Menu.Item as="a">
              <Icon name="gamepad" />
              Games
            </Menu.Item>
            <Menu.Item as="a">
              <Icon name="bath" />
              Channels
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher dimmed={visible} style={{ height: "1200px" }}>
            <Segment basic>
              <Header as="h3">Application Content</Header>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Grid.Column>
    </Grid>
  );
};

export default SidebarEx;
