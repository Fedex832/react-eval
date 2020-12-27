import React from 'react';

export default class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  render() {
    const { data } = this.state;
    console.log(data);
    if (data.length === 0) {
      return (
        <div>
          no data
        </div>
      );
    }
    return (
      data.datasets.map((element) => (
        <div className="card">
          <img src={element} className="card-img-top" alt="blah" />
          <div className="card-body">
            <h5 className="card-title">{element.title}</h5>
            <p className="card-text">{element.description}</p>
            <a href="{element.link}" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      ))
    );
  }
}
