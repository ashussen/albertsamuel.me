var React = require('react');

var Navbar = React.createClass({
  render: function() {
    var hidden = {
      display: 'none'
    };
    return (
      <div>
        <div className="navigator" id="header-container">
          <div className="container wide-container">
            <div className="strikingly-nav-spacer">
            </div>
            <div className="sixteen columns header">
              <div className="nav no-power">
                <ul className="s-nav">
                  <span>
                    <li style={hidden}>
                      <a className="s-nav-item" href="#me">Me</a>
                    </li>
                    <li>
                      <a className="s-nav-item" href="#about-me">ABOUT ME</a>
                    </li>
                    <li>
                      <a className="s-nav-item" href="#my-passion">MY PASSION</a>
                    </li>
                    <li>
                      <a className="s-nav-item" href="#my-system">MY SYSTEM</a>
                    </li>
                    <li>
                      <a className="s-nav-item" href="#connect">CONNECT</a>
                    </li>
                  </span>
                  <span>
                  </span>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div id="header-spacer"></div>
      </div>
    );
  }
});

module.exports = Navbar;