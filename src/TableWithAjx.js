import React, { useState, useEffect } from "react";
import { Icon, Menu, Table } from "semantic-ui-react";

const TableWithAjx = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://103.94.110.212:85/malad/api/master/party_out.php")
      .then((res) => res.json())
      .then((result) => {
        setItems(result);
      });
  }, []);

  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Company Name</Table.HeaderCell>
          <Table.HeaderCell>Contact Person</Table.HeaderCell>
          <Table.HeaderCell>Address</Table.HeaderCell>
          <Table.HeaderCell>City</Table.HeaderCell>
          <Table.HeaderCell>Email</Table.HeaderCell>
          <Table.HeaderCell>IFSC</Table.HeaderCell>
          <Table.HeaderCell>DTD</Table.HeaderCell>
          <Table.HeaderCell>MOBILE</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {/* <Table.Row>
          <Table.Cell>
            <Label ribbon>First</Label>
          </Table.Cell>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
        </Table.Row> */}
        {items.map((item) => {
          return (
            <Table.Row>
              <Table.Cell>{item.company_name}</Table.Cell>
              <Table.Cell>{item.contact_person}</Table.Cell>
              <Table.Cell>{item.address}</Table.Cell>
              <Table.Cell>{item.city}</Table.Cell>
              <Table.Cell>{item.email}</Table.Cell>
              <Table.Cell>{item.ifsc}</Table.Cell>
              <Table.Cell>{item.dtd}</Table.Cell>
              <Table.Cell>{item.mobile}</Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>

      <Table.Footer>
        <Table.Row>
          <Table.HeaderCell colSpan="8">
            <Menu floated="right" pagination>
              <Menu.Item as="a" icon>
                <Icon name="chevron left" />
              </Menu.Item>
              <Menu.Item as="a">1</Menu.Item>
              <Menu.Item as="a">2</Menu.Item>
              <Menu.Item as="a">3</Menu.Item>
              <Menu.Item as="a">4</Menu.Item>
              <Menu.Item as="a" icon>
                <Icon name="chevron right" />
              </Menu.Item>
            </Menu>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>
  );
};

export default TableWithAjx;
