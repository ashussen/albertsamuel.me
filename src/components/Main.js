require('normalize.css/normalize.css');
require('../styles/App.css');
require('../styles/main_show.css');
require('../styles/main_v4.css');
require('../styles/reset.css');

var Navbar = require('../components/Navbar.js');
var MyNameIs = require('../components/MyNameIs.js');
var Portfolio = require('../components/Portfolio.js');
var Footer = require('../components/Footer.js');

import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="index" id="s-content">
        {/*<Navbar />*/}
        <ul className="slides">
          <MyNameIs />
          <Portfolio />
          <Footer />
        </ul>
      </div>
    );
  }
}

App.defaultProps = {
};

export default App;
