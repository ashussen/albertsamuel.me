import background from '../images/Background.jpg';
var React = require('react');
var MyNameIs = React.createClass({
  componentDidMount: function() {
    //animate function
    var elem = document.getElementById("background-div");
    var pos = 10;
    var id = setInterval(frame, 10);
    function frame() {
        if (pos == 200) {
            clearInterval(id);
        } else {
            pos+=5;
            elem.style.paddingTop = pos + 'px';
            elem.style.paddingBottom = pos + 'px';
        }
    }
  },
  render: function(){
    var wideImage = {
      backgroundImage: 'url('+ background + ')',
      backgroundSize: 'cover',
      backgroundPosition: '49% 50%',
      backgroundRepeat: 'no-repeat no-repeat',
      paddingTop: 10,
      paddingBottom: 10
    }
    var container = {
      paddingTop: 90,
      paddingBottom: 70,
      position: 'relative',
      margin: '0 0 0 5%',
      width: 'auto'
    }
    return (
      <li className="slide selected my-name-is" tabIndex="0">
        <a className="section-anchor" data-scroll-name="#1"></a>
        <a className="section-name-anchor" data-section-name="Me"></a>
        <div className="wide image resize strikingly-light-text lazy-background hasImage" id="background-div" style={wideImage}>
          <div className="container" style={container}>
            <div className="sixteen columns">
              <div className="spacer" style={{height:10}}>&nbsp;</div>
              <h3 className="subtitle">
                <span className="line hide">
                </span>
                <div className="ib">
                  <div data-component="text" data-name="text1" data-text-type="body" className="text-component">
                    <div className="content content2" style={{fontFamily: 'droid serif', color: '#ebeced'}}>
                      <div>Hi, I am </div>
                    </div>
                  </div>
                </div>
                <span className="line">
                </span>
              </h3>
              <h1 className="title" style={{fontSize: '450%'}}>
                <div data-component="text" data-name="text2" data-text-type="title" className="text-component">
                  <div className="content content2" style={{fontFamily: 'ubuntu', color: '#ebeced'}}>
                    <div>Albert Samuel</div>
                    <div>&nbsp;</div>
                  </div>
                </div>
              </h1>
              <br/><br/>
            </div>
          </div>
        </div>
      </li>
    );
  }
});

module.exports = MyNameIs;