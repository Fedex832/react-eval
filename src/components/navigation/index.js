import React from 'react';
import Axios from 'axios';

import {
  Navbar,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      inputValue: '',
    };
    this.sendSearch = this.sendSearch.bind(this);
  }

  Search() {
    const { inputValue } = this.state;
    Axios.get(`https://opendata.paris.fr/api/datasets/1.0/search/?q=${inputValue}`)
      .then((res) => {
        console.log(res.data.datasets);
        this.setState({ data: res.data.datasets });
      });
  }

  render() {
    const { data } = this.state;
    console.log(data);
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Event Search</Navbar.Brand>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={(e) => this.setState({ data, inputValue: e.target.value })} />
          <Button variant="outline-success" onClick={this.Search}>Search</Button>
        </Form>
      </Navbar>
    );
  }
}
