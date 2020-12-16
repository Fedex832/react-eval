import React from 'react';
import {
  Navbar,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';

const Navigation = () => (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Event Search</Navbar.Brand>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar>
);

export default Navigation;
