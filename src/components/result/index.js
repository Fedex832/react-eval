import React from 'react';
import Axios from 'axios';

const data = [
  {
    id: '1',
    img: 'https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png',
    title: 'Carte 1',
    text: 'TEXTTEXTEXTEqedrfgqdfgqedrfgqdsrgqsrgqdsrgqsdrgezrgqesdr',
    link: 'index.js',
  },
  {
    id: '1',
    img: 'https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png',
    title: 'Carte 2',
    text: 'TEXTTEXTEXTEqedrfgqdf',
    link: 'index.js',
  },
];

export default class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    Axios.get('https://opendata.paris.fr/api/records/1.0/search/?dataset=que-faire-a-paris-&q=&facet=category&facet=tags&facet=address_name&facet=address_zipcode&facet=address_city&facet=pmr&facet=blind&facet=deaf&facet=access_type&facet=price_type')
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      data.map((element) => (
        <div className="card">
          <img src={element.img} className="card-img-top" alt="blah" />
          <div className="card-body">
            <h5 className="card-title">{element.title}</h5>
            <p className="card-text">{element.text}</p>
            <a href="{element.link}" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      ))
    );
  }
}
