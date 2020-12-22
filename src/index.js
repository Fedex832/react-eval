import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/navigation';
import Result from './components/result';

const App = () => (
  <div className="container">
    <Navigation />
    <Result />
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
