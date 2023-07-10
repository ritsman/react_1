import React from "react";
import {
  Grid,
  Icon,
  Header,
  Menu,
  Segment,
  Sidebar,
  Image,
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { Outlet } from "react-router-dom";
import MenuBar from "./MenuBar";
import TableEx from "./Table";
import Ajx from "./Ajx";
import TableWithAjx from "./TableWithAjx";
import TableWithAjxPage from "./TableWithAjxPage";
import img_lion from "./img88/lionking.png";

const GridExampleCelled = () => {
  const [visible, setVisible] = React.useState(false);
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column width={1}>
          <Icon
            name="bars"
            size="big"
            onClick={(e, data) => setVisible(true)}
          ></Icon>
        </Grid.Column>
        <Grid.Column width={15}>
          <MenuBar />
        </Grid.Column>
      </Grid.Row>
      {/* second row */}
      <Grid.Row>
        <Grid.Column width={16}>
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
              color="grey"
            >
              <Menu.Item as="a" to="Home">
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
                {/* show your content here */}
                <Outlet />
                {/* <TableEx /> */}
                <TableWithAjx />
                <TableWithAjxPage />
                {/* <Ajx /> */}
                <Image src={img_lion} />
              </Segment>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

///export default GridExampleCelled;

const App = () => {
  return <GridExampleCelled />;
};
export default App;
