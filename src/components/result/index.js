import React from 'react';

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
    text: 'TEXTTEXTEXTEqedrfgqdfgqedrfgqdsrgqsrgqdsrgqsdrgezrgqesdr',
    link: 'index.js',
  },
];

const Result = () => (
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

export default Result;
