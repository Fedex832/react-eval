import React from 'react';
import ReactDOM from 'react-dom';

import Navigation from './components/navigation';

const App = () => (
  <div className="container">
    <Navigation />
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
