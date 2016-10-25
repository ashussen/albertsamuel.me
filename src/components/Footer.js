var React = require('react');
var Footer = React.createClass({
	render: function(){
    //images
    var mail = require('../images/Mail.png');
    var twitter = require('../images/Twitter.png');
    var github = require('../images/Github.png');
    var quora = require('../images/Quora.png');
    var linkedin = require('../images/Linkedin.png');

		return (
      <li className="footer" style={{'background': '#CBC5C1'}}>
        <div className="s-icons-section s-section">
          <div className="container">
            <div className="columns sixteen">
              <div className="s-text">
                <h2 className="s-component-content s-font-title" style={{'fontFamily':'ubuntu'}}>
                  <p>I'm Sydney based,<br />passionate Web Developer,</p>
                  <p>currently looking for</p>
                  <p>a job opportunities.</p>
                </h2>
              </div>
            </div>
            <div className="s-mh s-repeatable">
              <div data-sorting-index="0" className="three columns half-fixed no-float s-repeatable-item">
                <div className="s-component s-image">
                    <a href="mailto:contact@albertsamuel.com" target="_blank">
                      <img alt="Twitter" title="Twitter" data-description="" src={mail} className=""/>
                    </a>
                </div>
              </div>
              <div data-sorting-index="0" className="three columns half-fixed no-float s-repeatable-item">
                <div className="s-component s-image">
                    <a href="https://twitter.com/as_albert" target="_blank">
                      <img alt="Twitter" title="Twitter" data-description="" src={twitter} className=""/>
                    </a>
                </div>
              </div>
              <div data-sorting-index="0" className="three columns half-fixed no-float s-repeatable-item">
                <div className="s-component s-image">
                    <a href="https://github.com/ashussen" target="_blank">
                      <img alt="Twitter" title="Twitter" data-description="" src={github} className=""/>
                    </a>
                </div>
              </div>
              <div data-sorting-index="0" className="three columns half-fixed no-float s-repeatable-item">
                <div className="s-component s-image">
                    <a href="https://www.quora.com/profile/Albert-Samuel" target="_blank">
                      <img alt="Twitter" title="Twitter" data-description="" src={quora} className=""/>
                    </a>
                </div>
              </div>
              <div data-sorting-index="0" className="three columns half-fixed no-float s-repeatable-item">
                <div className="s-component s-image">
                    <a href="https://www.linkedin.com/in/albertsamuel" target="_blank">
                      <img alt="Twitter" title="Twitter" data-description="" src={linkedin} className=""/>
                    </a>
                </div>
              </div>
            </div>
          </div>
          <div className="s-text">
            <h4 className="s-component-content">
              <p style={{'textAlign':'center'}}><em> &copy; Albert Samuel 2016</em></p>
            </h4>
          </div>
        </div>
      </li>
		);
	}
});

module.exports = Footer;